from datetime import date
from typing import Optional, List
from pydantic import BaseModel
from app.models.enums import IeltsTargetBand, DatePrecision
from app.schemas.onboarding import SatOfficialSessionResponse
from app.schemas.attempt import UserAttemptResponse

class DashboardIelts(BaseModel):
    current_band: Optional[float] = None
    current_unknown: bool
    target_band: IeltsTargetBand
    planned_date: Optional[date] = None
    date_precision: Optional[DatePrecision] = None
    countdown_days: Optional[int] = None

class DashboardSat(BaseModel):
    current_score: Optional[int] = None
    current_unknown: bool
    target_score: int
    sat_target_is_plus: bool
    session: Optional[SatOfficialSessionResponse] = None
    countdown_days: Optional[int] = None

class DashboardResponse(BaseModel):
    ielts: DashboardIelts
    sat: DashboardSat
    flashcards_due_count: int
    recent_attempts: List[UserAttemptResponse] = []
