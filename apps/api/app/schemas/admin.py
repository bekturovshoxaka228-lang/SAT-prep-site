from datetime import datetime
from typing import Optional, List, Any
from pydantic import BaseModel, Field
from app.models.enums import ExamType, ExamSectionKind, QuestionType, AiWritingEvalStatus

class AdminDashboardStats(BaseModel):
    users_total: int
    users_onboarded: int
    attempts_today: int
    writing_queue_pending: int
    exams_published: int

class AdminCreateListeningCueRequest(BaseModel):
    client_key: Optional[str] = None
    audio_url: str
    start_ms: int = Field(ge=0)
    end_ms: int = Field(ge=0)
    label: Optional[str] = None
    sort_order: int

class AdminCreateQuestionRequest(BaseModel):
    question_type: QuestionType
    content: Any
    options: Optional[Any] = None
    correct_answer: Optional[Any] = None
    hint: Optional[str] = None
    explanation: Optional[str] = None
    has_latex: bool = False
    audio_cue_client_key: Optional[str] = None
    sort_order: int
    points: float = 1.0

class AdminCreateSectionRequest(BaseModel):
    kind: ExamSectionKind
    title: str
    module_index: Optional[int] = Field(None, ge=1, le=2)
    duration_sec: int = Field(ge=1)
    sort_order: int
    instructions: Optional[str] = None
    listening_cues: List[AdminCreateListeningCueRequest] = []
    questions: List[AdminCreateQuestionRequest] = []

class AdminCreateTestRequest(BaseModel):
    title: str
    exam_type: ExamType
    description: Optional[str] = None
    is_published: bool = False
    sections: List[AdminCreateSectionRequest] = Field(min_length=1)

class ExamResponse(BaseModel):
    id: str
    title: str
    exam_type: ExamType
    description: Optional[str] = None
    is_published: bool
    created_by_id: Optional[str] = None

    model_config = {
        "from_attributes": True
    }

class WritingOverrideRequest(BaseModel):
    task_achievement: float = Field(ge=0, le=9)
    coherence: float = Field(ge=0, le=9)
    lexical: float = Field(ge=0, le=9)
    grammar: float = Field(ge=0, le=9)
    overall: float = Field(ge=0, le=9)
    comment: Optional[str] = None
    status: str = Field(description="human_review or final")

class AiWritingEvaluationResponse(BaseModel):
    id: str
    user_id: str
    attempt_id: Optional[str] = None
    question_id: Optional[str] = None
    task_type: str
    prompt_text: str
    essay_text: str
    status: AiWritingEvalStatus
    ai_task_achievement: Optional[float] = None
    ai_coherence: Optional[float] = None
    ai_lexical: Optional[float] = None
    ai_grammar: Optional[float] = None
    ai_overall: Optional[float] = None
    ai_feedback: Optional[Any] = None
    human_override_task_achievement: Optional[float] = None
    human_override_coherence: Optional[float] = None
    human_override_lexical: Optional[float] = None
    human_override_grammar: Optional[float] = None
    human_override_overall: Optional[float] = None
    human_override_comment: Optional[str] = None
    reviewer_id: Optional[str] = None
    reviewed_at: Optional[datetime] = None

    model_config = {
        "from_attributes": True
    }
