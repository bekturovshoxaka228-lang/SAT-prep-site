from datetime import datetime
from typing import Optional, List, Any
from pydantic import BaseModel, Field
from app.models.enums import AttemptStatus, ExamType, ExamSectionKind, QuestionType

class CreateAttemptRequest(BaseModel):
    exam_id: str
    exam_section_id: Optional[str] = None
    module_index: Optional[int] = Field(None, ge=1, le=2)

class UpsertAnswerRequest(BaseModel):
    question_id: str
    answer: Any

class UserAnswerResponse(BaseModel):
    id: str
    attempt_id: str
    question_id: str
    answer: Any
    is_correct: Optional[bool] = None
    awarded_points: Optional[float] = None
    answered_at: datetime

    model_config = {
        "from_attributes": True
    }

class UserAttemptResponse(BaseModel):
    id: str
    user_id: str
    exam_id: str
    exam_section_id: Optional[str] = None
    status: AttemptStatus
    started_at: datetime
    submitted_at: Optional[datetime] = None
    score: Optional[float] = None
    max_score: Optional[float] = None
    module_index: Optional[int] = None
    adaptive_path: Optional[Any] = None

    model_config = {
        "from_attributes": True
    }

class UserAttemptDetailResponse(UserAttemptResponse):
    answers: List[UserAnswerResponse] = []

    model_config = {
        "from_attributes": True
    }
