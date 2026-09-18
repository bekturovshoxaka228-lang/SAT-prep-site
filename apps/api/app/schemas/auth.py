import re
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field, field_validator
from app.models.enums import UserRole, OnboardingStep

class RegisterRequest(BaseModel):
    email: EmailStr
    username: str = Field(min_length=3, max_length=64)
    password: str = Field(min_length=8, max_length=128)

    @field_validator("username")
    @classmethod
    def validate_username(cls, v: str) -> str:
        if not re.match(r"^[a-zA-Z0-9_]+$", v):
            raise ValueError("Username may only contain letters, numbers, and underscores")
        return v

class LoginRequest(BaseModel):
    login: str = Field(description="Email or username")
    password: str

class MeResponse(BaseModel):
    id: str
    email: str
    username: str
    role: UserRole
    onboarding_completed: bool
    onboarding_step: OnboardingStep
    ielts_onboarding_at: Optional[datetime] = None
    sat_onboarding_at: Optional[datetime] = None

    model_config = {
        "from_attributes": True
    }
