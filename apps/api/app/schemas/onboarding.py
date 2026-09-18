from datetime import date
from typing import Optional
from pydantic import BaseModel, Field, model_validator
from app.models.enums import IeltsTargetBand, DatePrecision, SatMonth

class OnboardingIeltsRequest(BaseModel):
    current_unknown: bool
    current_band: Optional[float] = Field(None, ge=1.0, le=9.0)
    target_band: IeltsTargetBand
    previous_band: Optional[float] = Field(None, ge=1.0, le=9.0)
    date_precision: DatePrecision
    planned_date: Optional[date] = None
    planned_year: Optional[int] = None
    planned_month: Optional[int] = Field(None, ge=1, le=12)

    @model_validator(mode="after")
    def validate_ielts(self) -> "OnboardingIeltsRequest":
        # Check current band logic
        if self.current_unknown and self.current_band is not None:
            raise ValueError("current_band must be null when current_unknown is true")
        if not self.current_unknown and self.current_band is None:
            raise ValueError("current_band is required when current_unknown is false")
        if self.current_band is not None:
            if (self.current_band * 10) % 5 != 0:
                raise ValueError("current_band must be in increments of 0.5")
        if self.previous_band is not None:
            if (self.previous_band * 10) % 5 != 0:
                raise ValueError("previous_band must be in increments of 0.5")
        
        # Check date precision logic
        if self.date_precision == DatePrecision.day:
            if not self.planned_date:
                raise ValueError("planned_date is required when date_precision is 'day'")
        elif self.date_precision == DatePrecision.month:
            if not self.planned_year or not self.planned_month:
                raise ValueError("planned_year and planned_month are required when date_precision is 'month'")
        return self

class OnboardingSatRequest(BaseModel):
    current_unknown: bool
    current_score: Optional[int] = Field(None, ge=400, le=1600)
    target_score: int = Field(ge=400, le=1600)
    sat_target_is_plus: bool = False
    previous_score: Optional[int] = Field(None, ge=400, le=1600)
    sat_session_id: str

    @model_validator(mode="after")
    def validate_sat(self) -> "OnboardingSatRequest":
        if self.current_unknown and self.current_score is not None:
            raise ValueError("current_score must be null when current_unknown is true")
        if not self.current_unknown and self.current_score is None:
            raise ValueError("current_score is required when current_unknown is false")
        if self.current_score is not None and self.current_score % 10 != 0:
            raise ValueError("current_score must be a multiple of 10")
        if self.target_score % 10 != 0:
            raise ValueError("target_score must be a multiple of 10")
        if self.previous_score is not None and self.previous_score % 10 != 0:
            raise ValueError("previous_score must be a multiple of 10")
        if self.sat_target_is_plus and self.target_score != 1500:
            raise ValueError("sat_target_is_plus can only be true when target_score is 1500 (representing 1500+)")
        return self

class SatOfficialSessionResponse(BaseModel):
    id: str
    year: int
    month: SatMonth
    start_date: date
    registration_deadline: Optional[date] = None
    is_published: bool

    model_config = {
        "from_attributes": True
    }
