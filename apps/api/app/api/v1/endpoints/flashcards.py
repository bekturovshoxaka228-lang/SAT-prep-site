from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.core.dependencies import get_current_onboarded_user, get_current_user
from app.models.entities import User, Flashcard, UserFlashcardProgress
from app.models.base import utc_now
from app.services.sm2 import calculate_sm2
from app.schemas.flashcard import (
    FlashcardDueItem,
    FlashcardReviewRequest,
    UserFlashcardProgressResponse,
)
from app.schemas.common import ErrorResponse, ValidationErrorResponse

router = APIRouter()

@router.get(
    "/due",
    response_model=dict[str, List[FlashcardDueItem]],
    status_code=status.HTTP_200_OK,
)
async def list_due_flashcards(
    current_user: User = Depends(get_current_onboarded_user),
    db: AsyncSession = Depends(get_db),
) -> dict[str, List[FlashcardDueItem]]:
    now = utc_now()

    # 1. Existing cards due for review
    stmt_due = (
        select(Flashcard, UserFlashcardProgress)
        .join(UserFlashcardProgress, Flashcard.id == UserFlashcardProgress.flashcard_id)
        .where(
            UserFlashcardProgress.user_id == current_user.id,
            UserFlashcardProgress.next_review <= now,
        )
    )
    res_due = await db.execute(stmt_due)
    due_rows = res_due.all()

    items: List[FlashcardDueItem] = []
    for card, progress in due_rows:
        items.append(
            FlashcardDueItem(
                id=card.id,
                front=card.front,
                back=card.back,
                deck=card.deck,
                tags=card.tags or [],
                progress=UserFlashcardProgressResponse.model_validate(progress),
            )
        )

    # 2. Unreviewed cards that haven't been practiced yet
    stmt_unreviewed = (
        select(Flashcard)
        .where(
            ~Flashcard.id.in_(
                select(UserFlashcardProgress.flashcard_id).where(UserFlashcardProgress.user_id == current_user.id)
            )
        )
        .limit(20)
    )
    res_unreviewed = await db.execute(stmt_unreviewed)
    unreviewed_cards = res_unreviewed.scalars().all()

    for card in unreviewed_cards:
        items.append(
            FlashcardDueItem(
                id=card.id,
                front=card.front,
                back=card.back,
                deck=card.deck,
                tags=card.tags or [],
                progress=None,
            )
        )

    return {"items": items}

@router.post(
    "/{flashcard_id}/review",
    response_model=UserFlashcardProgressResponse,
    status_code=status.HTTP_200_OK,
    responses={
        404: {"model": ErrorResponse, "description": "Flashcard not found"},
    },
)
async def review_flashcard(
    flashcard_id: str,
    req: FlashcardReviewRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> UserFlashcardProgressResponse:
    # Check flashcard existence
    stmt_fc = select(Flashcard).where(Flashcard.id == flashcard_id)
    res_fc = await db.execute(stmt_fc)
    flashcard = res_fc.scalar_one_or_none()

    if not flashcard:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Flashcard not found"},
        )

    # Check existing progress
    stmt_prog = select(UserFlashcardProgress).where(
        UserFlashcardProgress.user_id == current_user.id,
        UserFlashcardProgress.flashcard_id == flashcard_id,
    )
    res_prog = await db.execute(stmt_prog)
    progress = res_prog.scalar_one_or_none()

    current_ef = float(progress.ease_factor) if progress else 2.5
    current_rep = progress.repetition if progress else 0
    current_interval = progress.interval_days if progress else 0

    new_rep, new_ef, new_interval, next_rev = calculate_sm2(
        quality=req.quality,
        repetition=current_rep,
        ease_factor=current_ef,
        interval_days=current_interval,
    )

    if progress:
        progress.repetition = new_rep
        progress.ease_factor = new_ef
        progress.interval_days = new_interval
        progress.next_review = next_rev
        progress.last_reviewed_at = utc_now()
        progress.last_quality = req.quality
    else:
        progress = UserFlashcardProgress(
            user_id=current_user.id,
            flashcard_id=flashcard_id,
            repetition=new_rep,
            ease_factor=new_ef,
            interval_days=new_interval,
            next_review=next_rev,
            last_reviewed_at=utc_now(),
            last_quality=req.quality,
        )
        db.add(progress)

    await db.commit()
    await db.refresh(progress)

    return UserFlashcardProgressResponse.model_validate(progress)
