from typing import Optional, Callable
from fastapi import Request, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.core.config import settings
from app.core.security import decode_session_token
from app.core.database import get_db
from app.models.entities import User, UserProfile
from app.models.enums import UserRole, OnboardingStep
from app.schemas.auth import MeResponse

def compute_onboarding_step(profile: Optional[UserProfile]) -> OnboardingStep:
    if not profile or not profile.ielts_onboarding_at:
        return OnboardingStep.ielts
    if not profile.sat_onboarding_at:
        return OnboardingStep.sat
    return OnboardingStep.complete

def build_me_response(user: User) -> MeResponse:
    profile = user.profile
    step = compute_onboarding_step(profile)
    completed = profile.onboarding_completed if profile else False
    ielts_at = profile.ielts_onboarding_at if profile else None
    sat_at = profile.sat_onboarding_at if profile else None

    return MeResponse(
        id=user.id,
        email=user.email,
        username=user.username,
        role=user.role,
        onboarding_completed=completed,
        onboarding_step=step,
        ielts_onboarding_at=ielts_at,
        sat_onboarding_at=sat_at,
    )

async def get_current_user(
    request: Request,
    db: AsyncSession = Depends(get_db),
) -> User:
    token = request.cookies.get(settings.COOKIE_NAME)
    
    # Fallback to Authorization header if provided
    if not token:
        auth_header = request.headers.get("Authorization")
        if auth_header and auth_header.startswith("Bearer "):
            token = auth_header[7:]

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"code": "unauthorized", "message": "Missing authentication session"},
        )

    payload = decode_session_token(token)
    if not payload or "sub" not in payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"code": "unauthorized", "message": "Invalid or expired session"},
        )

    user_id = payload["sub"]
    stmt = (
        select(User)
        .options(selectinload(User.profile))
        .where(User.id == user_id)
    )
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"code": "unauthorized", "message": "User not found"},
        )

    return user

async def get_current_onboarded_user(
    current_user: User = Depends(get_current_user),
) -> User:
    if not current_user.profile or not current_user.profile.onboarding_completed:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"code": "forbidden", "message": "Onboarding not completed"},
        )
    return current_user

def require_roles(*allowed_roles: UserRole) -> Callable:
    async def role_checker(current_user: User = Depends(get_current_user)) -> User:
        if current_user.role not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail={"code": "forbidden", "message": "Insufficient role permissions"},
            )
        return current_user
    return role_checker
