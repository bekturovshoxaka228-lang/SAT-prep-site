from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.core.database import get_db
from app.core.dependencies import get_current_user, get_current_onboarded_user
from app.models.entities import User, Exam, ExamSection, Question, UserAttempt, UserAnswer
from app.models.enums import AttemptStatus, ExamType
from app.models.base import utc_now
from app.schemas.attempt import (
    CreateAttemptRequest,
    UpsertAnswerRequest,
    UserAttemptResponse,
    UserAttemptDetailResponse,
    UserAnswerResponse,
)
from app.schemas.common import ErrorResponse, ValidationErrorResponse

router = APIRouter()

@router.get(
    "",
    response_model=dict[str, List[UserAttemptResponse]],
    status_code=status.HTTP_200_OK,
)
async def list_attempts(
    exam_type: Optional[ExamType] = Query(None),
    status_filter: Optional[AttemptStatus] = Query(None, alias="status"),
    current_user: User = Depends(get_current_onboarded_user),
    db: AsyncSession = Depends(get_db),
) -> dict[str, List[UserAttemptResponse]]:
    stmt = (
        select(UserAttempt)
        .join(Exam, UserAttempt.exam_id == Exam.id)
        .where(UserAttempt.user_id == current_user.id)
    )
    if exam_type:
        stmt = stmt.where(Exam.exam_type == exam_type)
    if status_filter:
        stmt = stmt.where(UserAttempt.status == status_filter)
    stmt = stmt.order_by(UserAttempt.started_at.desc())

    res = await db.execute(stmt)
    attempts = res.scalars().all()

    return {
        "items": [UserAttemptResponse.model_validate(a) for a in attempts]
    }

@router.post(
    "",
    response_model=UserAttemptResponse,
    status_code=status.HTTP_201_CREATED,
    responses={
        404: {"model": ErrorResponse, "description": "Exam not found or unpublished"},
    },
)
async def create_attempt(
    req: CreateAttemptRequest,
    current_user: User = Depends(get_current_onboarded_user),
    db: AsyncSession = Depends(get_db),
) -> UserAttemptResponse:
    stmt = select(Exam).where(Exam.id == req.exam_id, Exam.is_published.is_(True))
    res = await db.execute(stmt)
    exam = res.scalar_one_or_none()

    if not exam:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Exam not found or is not published"},
        )

    attempt = UserAttempt(
        user_id=current_user.id,
        exam_id=exam.id,
        exam_section_id=req.exam_section_id,
        module_index=req.module_index,
        status=AttemptStatus.in_progress,
        started_at=utc_now(),
    )
    db.add(attempt)
    await db.commit()
    await db.refresh(attempt)

    return UserAttemptResponse.model_validate(attempt)

@router.get(
    "/{attempt_id}",
    response_model=UserAttemptDetailResponse,
    status_code=status.HTTP_200_OK,
)
async def get_attempt(
    attempt_id: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> UserAttemptDetailResponse:
    stmt = (
        select(UserAttempt)
        .options(selectinload(UserAttempt.answers))
        .where(UserAttempt.id == attempt_id)
    )
    res = await db.execute(stmt)
    attempt = res.scalar_one_or_none()

    if not attempt:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Attempt not found"},
        )

    if attempt.user_id != current_user.id and current_user.role.value == "student":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Access denied"},
        )

    return UserAttemptDetailResponse.model_validate(attempt)

@router.post(
    "/{attempt_id}/answers",
    response_model=UserAnswerResponse,
    status_code=status.HTTP_200_OK,
)
async def upsert_attempt_answer(
    attempt_id: str,
    req: UpsertAnswerRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> UserAnswerResponse:
    stmt_att = select(UserAttempt).where(UserAttempt.id == attempt_id)
    res_att = await db.execute(stmt_att)
    attempt = res_att.scalar_one_or_none()

    if not attempt:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Attempt not found"},
        )

    if attempt.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Not the attempt owner"},
        )

    if attempt.status != AttemptStatus.in_progress:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Attempt is not in progress"},
        )

    # Check question
    stmt_q = select(Question).where(Question.id == req.question_id)
    res_q = await db.execute(stmt_q)
    question = res_q.scalar_one_or_none()

    if not question:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Question not found"},
        )

    # Upsert answer
    stmt_ans = select(UserAnswer).where(
        UserAnswer.attempt_id == attempt_id,
        UserAnswer.question_id == req.question_id,
    )
    res_ans = await db.execute(stmt_ans)
    user_answer = res_ans.scalar_one_or_none()

    # Check correctness if correct_answer is defined
    is_correct = None
    awarded_points = None
    if question.correct_answer is not None:
        is_correct = (req.answer == question.correct_answer)
        awarded_points = float(question.points) if is_correct else 0.0

    if user_answer:
        user_answer.answer = req.answer
        user_answer.is_correct = is_correct
        user_answer.awarded_points = awarded_points
        user_answer.answered_at = utc_now()
    else:
        user_answer = UserAnswer(
            attempt_id=attempt_id,
            question_id=req.question_id,
            answer=req.answer,
            is_correct=is_correct,
            awarded_points=awarded_points,
            answered_at=utc_now(),
        )
        db.add(user_answer)

    await db.commit()
    await db.refresh(user_answer)

    return UserAnswerResponse.model_validate(user_answer)

@router.post(
    "/{attempt_id}/submit",
    response_model=UserAttemptResponse,
    status_code=status.HTTP_200_OK,
)
async def submit_attempt(
    attempt_id: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> UserAttemptResponse:
    stmt = (
        select(UserAttempt)
        .options(selectinload(UserAttempt.answers))
        .where(UserAttempt.id == attempt_id)
    )
    res = await db.execute(stmt)
    attempt = res.scalar_one_or_none()

    if not attempt:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Attempt not found"},
        )

    if attempt.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Not the attempt owner"},
        )

    if attempt.status != AttemptStatus.in_progress:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Attempt already submitted or completed"},
        )

    # Calculate total score from answers
    total_score = 0.0
    for ans in attempt.answers:
        if ans.awarded_points is not None:
            total_score += float(ans.awarded_points)

    attempt.status = AttemptStatus.scored
    attempt.submitted_at = utc_now()
    attempt.score = total_score

    await db.commit()
    await db.refresh(attempt)

    return UserAttemptResponse.model_validate(attempt)
