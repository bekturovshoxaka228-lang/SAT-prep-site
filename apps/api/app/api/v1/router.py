from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth,
    onboarding,
    sat,
    dashboard,
    attempts,
    flashcards,
    admin,
    ai_review,
)

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(onboarding.router, prefix="/onboarding", tags=["Onboarding"])
api_router.include_router(sat.router, prefix="/sat", tags=["SAT"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["Dashboard"])
api_router.include_router(attempts.router, prefix="/attempts", tags=["Attempts"])
api_router.include_router(flashcards.router, prefix="/flashcards", tags=["Flashcards"])
api_router.include_router(admin.router, prefix="/admin", tags=["Admin"])
api_router.include_router(ai_review.router, prefix="/ai", tags=["AI Solution Reviewer"])
