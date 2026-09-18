from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field

class WritingEvaluationRequest(BaseModel):
    task_type: str = Field(..., description="task1 or task2")
    prompt_text: str = Field(..., min_length=5)
    essay_text: str = Field(..., min_length=20)
    attempt_id: Optional[str] = None
    question_id: Optional[str] = None

class WritingEvaluationResult(BaseModel):
    id: str
    task_type: str
    prompt_text: str
    essay_text: str
    status: str
    word_count: int
    ai_task_achievement: float
    ai_coherence: float
    ai_lexical: float
    ai_grammar: float
    ai_overall: float
    ai_feedback: Dict[str, Any]
    created_at: datetime

    model_config = {
        "from_attributes": True
    }

class WritingPromptItem(BaseModel):
    id: str
    task_type: str
    title: str
    prompt_text: str
    category: str
    time_limit_mins: int
    min_words: int
    image_url: Optional[str] = None
    sample_outline: Optional[List[str]] = None
