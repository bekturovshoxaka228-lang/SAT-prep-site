from datetime import date, datetime, timezone
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.entities import User, UserProfile, SatOfficialSession, UserAttempt, UserFlashcardProgress, Flashcard
from app.models.enums import IeltsTargetBand
from app.models.base import utc_now
from app.schemas.dashboard import DashboardResponse, DashboardIelts, DashboardSat
from app.schemas.onboarding import SatOfficialSessionResponse
from app.schemas.attempt import UserAttemptResponse
from app.schemas.common import ErrorResponse

router = APIRouter()

@router.get(
    "",
    response_model=DashboardResponse,
    status_code=status.HTTP_200_OK,
    responses={
        401: {"model": ErrorResponse, "description": "Not authenticated"},
        403: {"model": ErrorResponse, "description": "Onboarding not completed"},
    },
)
async def get_dashboard(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> DashboardResponse:
    profile = current_user.profile
    if not profile or not profile.onboarding_completed:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Onboarding not completed"},
        )

    today = date.today()

    # 1. Calculate IELTS countdown
    ielts_countdown: Optional[int] = None
    ielts_target_date: Optional[date] = None
    if profile.ielts_planned_date:
        ielts_target_date = profile.ielts_planned_date
    elif profile.ielts_planned_year and profile.ielts_planned_month:
        ielts_target_date = date(profile.ielts_planned_year, profile.ielts_planned_month, 1)

    if ielts_target_date:
        ielts_countdown = max(0, (ielts_target_date - today).days)

    dashboard_ielts = DashboardIelts(
        current_band=float(profile.ielts_current_band) if profile.ielts_current_band is not None else None,
        current_unknown=bool(profile.ielts_current_unknown),
        target_band=profile.ielts_target_band or IeltsTargetBand.BAND_7_5,
        planned_date=ielts_target_date,
        date_precision=profile.ielts_date_precision,
        countdown_days=ielts_countdown,
    )

    # 2. Calculate SAT countdown
    sat_session: Optional[SatOfficialSessionResponse] = None
    sat_countdown: Optional[int] = None

    if profile.sat_session_id:
        stmt_sess = select(SatOfficialSession).where(SatOfficialSession.id == profile.sat_session_id)
        sess_res = await db.execute(stmt_sess)
        db_sess = sess_res.scalar_one_or_none()
        if db_sess:
            sat_session = SatOfficialSessionResponse.model_validate(db_sess)
            sat_countdown = max(0, (db_sess.start_date - today).days)

    dashboard_sat = DashboardSat(
        current_score=profile.sat_current_score,
        current_unknown=bool(profile.sat_current_unknown),
        target_score=profile.sat_target_score or 1400,
        sat_target_is_plus=bool(profile.sat_target_is_plus),
        session=sat_session,
        countdown_days=sat_countdown,
    )

    # 3. Flashcards due count
    now = utc_now()
    stmt_due = (
        select(func.count(UserFlashcardProgress.id))
        .where(
            UserFlashcardProgress.user_id == current_user.id,
            UserFlashcardProgress.next_review <= now,
        )
    )
    due_res = await db.execute(stmt_due)
    due_count = due_res.scalar() or 0

    # Also count unstarted flashcards
    stmt_unstarted = (
        select(func.count(Flashcard.id))
        .where(
            ~Flashcard.id.in_(
                select(UserFlashcardProgress.flashcard_id).where(UserFlashcardProgress.user_id == current_user.id)
            )
        )
    )
    unstarted_res = await db.execute(stmt_unstarted)
    unstarted_count = unstarted_res.scalar() or 0
    total_due_count = due_count + unstarted_count

    # 4. Recent attempts
    stmt_attempts = (
        select(UserAttempt)
        .where(UserAttempt.user_id == current_user.id)
        .order_by(UserAttempt.started_at.desc())
        .limit(5)
    )
    att_res = await db.execute(stmt_attempts)
    attempts = att_res.scalars().all()

    return DashboardResponse(
        ielts=dashboard_ielts,
        sat=dashboard_sat,
        flashcards_due_count=total_due_count,
        recent_attempts=[UserAttemptResponse.model_validate(a) for a in attempts],
    )
