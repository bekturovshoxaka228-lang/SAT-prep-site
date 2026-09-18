from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_

from app.core.database import get_db
from app.core.security import (
    get_password_hash,
    verify_password,
    create_session_token,
    set_session_cookie,
    clear_session_cookie,
)
from app.core.dependencies import get_current_user, build_me_response
from app.models.entities import User, UserProfile
from app.models.enums import UserRole
from app.schemas.auth import RegisterRequest, LoginRequest, MeResponse
from app.schemas.common import ConflictErrorResponse, ErrorResponse

router = APIRouter()

@router.post(
    "/register",
    response_model=MeResponse,
    status_code=status.HTTP_201_CREATED,
    responses={
        409: {"model": ConflictErrorResponse, "description": "Conflict (email or username exists)"},
        422: {"description": "Validation error"},
    },
)
async def register(
    req: RegisterRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
) -> MeResponse:
    # 1. Check existing email
    stmt_email = select(User).where(User.email == req.email.lower())
    res_email = await db.execute(stmt_email)
    if res_email.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail={
                "code": "conflict",
                "message": "Email is already registered",
                "field": "email",
            },
        )

    # 2. Check existing username
    stmt_user = select(User).where(User.username == req.username)
    res_user = await db.execute(stmt_user)
    if res_user.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail={
                "code": "conflict",
                "message": "Username is already taken",
                "field": "username",
            },
        )

    # 3. Create user and profile
    password_hash = get_password_hash(req.password)
    user = User(
        email=req.email.lower(),
        username=req.username,
        password_hash=password_hash,
        role=UserRole.student,
    )
    db.add(user)
    await db.flush()

    profile = UserProfile(
        user_id=user.id,
        onboarding_completed=False,
    )
    db.add(profile)
    await db.flush()
    await db.commit()

    user.profile = profile

    # 4. Set session cookie and return 201
    token = create_session_token(user.id, user.role.value)
    set_session_cookie(response, token)

    return build_me_response(user)

@router.post(
    "/login",
    response_model=MeResponse,
    status_code=status.HTTP_200_OK,
    responses={
        401: {"model": ErrorResponse, "description": "Invalid credentials"},
        422: {"description": "Validation error"},
    },
)
async def login(
    req: LoginRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
) -> MeResponse:
    login_val = req.login.strip()
    stmt = (
        select(User)
        .where(or_(User.email == login_val.lower(), User.username == login_val))
    )
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user or not verify_password(req.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"code": "unauthorized", "message": "Invalid email/username or password"},
        )

    # Ensure profile loaded
    stmt_profile = select(UserProfile).where(UserProfile.user_id == user.id)
    p_res = await db.execute(stmt_profile)
    user.profile = p_res.scalar_one_or_none()

    token = create_session_token(user.id, user.role.value)
    set_session_cookie(response, token)

    return build_me_response(user)

@router.post(
    "/logout",
    status_code=status.HTTP_204_NO_CONTENT,
    responses={
        401: {"model": ErrorResponse, "description": "Not authenticated"},
    },
)
async def logout(
    response: Response,
    current_user: User = Depends(get_current_user),
) -> None:
    clear_session_cookie(response)
    response.status_code = status.HTTP_204_NO_CONTENT

@router.get(
    "/me",
    response_model=MeResponse,
    status_code=status.HTTP_200_OK,
    responses={
        401: {"model": ErrorResponse, "description": "Missing or invalid session"},
    },
)
async def me(
    current_user: User = Depends(get_current_user),
) -> MeResponse:
    return build_me_response(current_user)
