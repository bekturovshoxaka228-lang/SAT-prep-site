from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.core.dependencies import get_current_user, build_me_response
from app.models.entities import User, UserProfile, SatOfficialSession
from app.models.base import utc_now
from app.schemas.auth import MeResponse
from app.schemas.onboarding import OnboardingIeltsRequest, OnboardingSatRequest
from app.schemas.common import ErrorResponse, ValidationErrorResponse

router = APIRouter()

@router.post(
    "/ielts",
    response_model=MeResponse,
    status_code=status.HTTP_200_OK,
    responses={
        401: {"model": ErrorResponse, "description": "Not authenticated"},
        422: {"model": ValidationErrorResponse, "description": "Validation error"},
    },
)
async def onboarding_ielts(
    req: OnboardingIeltsRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> MeResponse:
    profile = current_user.profile
    if not profile:
        profile = UserProfile(user_id=current_user.id)
        db.add(profile)
        await db.flush()

    profile.ielts_current_band = req.current_band
    profile.ielts_current_unknown = req.current_unknown
    profile.ielts_target_band = req.target_band
    profile.ielts_previous = req.previous_band
    profile.ielts_date_precision = req.date_precision
    profile.ielts_planned_date = req.planned_date
    profile.ielts_planned_year = req.planned_year
    profile.ielts_planned_month = req.planned_month
    profile.ielts_onboarding_at = utc_now()

    await db.commit()
    await db.refresh(profile)
    current_user.profile = profile

    return build_me_response(current_user)

@router.post(
    "/sat",
    response_model=MeResponse,
    status_code=status.HTTP_200_OK,
    responses={
        401: {"model": ErrorResponse, "description": "Not authenticated"},
        403: {"model": ErrorResponse, "description": "IELTS step not completed"},
        422: {"model": ValidationErrorResponse, "description": "Validation error or unpublished session"},
    },
)
async def onboarding_sat(
    req: OnboardingSatRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> MeResponse:
    profile = current_user.profile
    if not profile or not profile.ielts_onboarding_at:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "IELTS step must be completed before SAT onboarding"},
        )

    # Validate official SAT session
    stmt_session = select(SatOfficialSession).where(
        SatOfficialSession.id == req.sat_session_id,
        SatOfficialSession.is_published.is_(True),
    )
    res_session = await db.execute(stmt_session)
    session_obj = res_session.scalar_one_or_none()

    if not session_obj:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail={
                "code": "validation_error",
                "message": "Selected SAT session does not exist or is not published",
                "details": [{"loc": ["body", "sat_session_id"], "msg": "Session not published or not found"}],
            },
        )

    profile.sat_current_score = req.current_score
    profile.sat_current_unknown = req.current_unknown
    profile.sat_target_score = req.target_score
    profile.sat_target_is_plus = req.sat_target_is_plus
    profile.sat_previous = req.previous_score
    profile.sat_session_id = req.sat_session_id
    profile.sat_onboarding_at = utc_now()
    profile.onboarding_completed = True

    await db.commit()
    await db.refresh(profile)
    current_user.profile = profile

    return build_me_response(current_user)
