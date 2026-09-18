from typing import Optional, List
from pydantic import BaseModel, Field

class AnalogousExample(BaseModel):
    problem: str
    solution: str
    explanation: str

class AiSolutionReviewRequest(BaseModel):
    task_prompt: str = Field(..., description="The original task question or prompt")
    user_solution: str = Field(..., description="The user's solution, reasoning steps, or selected answer")
    correct_answer: Optional[str] = Field(None, description="Known correct answer or reference answer if available")
    official_explanation: Optional[str] = Field(None, description="Official explanation or context if available")
    subject: Optional[str] = Field("general", description="Subject area: sat-math, sat-rw, ielts-reading, ielts-writing, ielts-speaking, ielts-listening, general")
    api_key: Optional[str] = Field(None, description="Optional custom Gemini or OpenAI API key")
    provider: Optional[str] = Field("gemini", description="AI Provider: gemini or openai")

class AiSolutionReviewResponse(BaseModel):
    is_correct: bool = Field(..., description="Whether the user's solution is completely correct")
    verdict_title: str = Field(..., description="High-level status: Correct Solution Verified or Error Detected in Solution")
    error_quote: Optional[str] = Field(None, description="Exact quotation from the user's solution where the error occurs")
    violation_explanation: Optional[str] = Field(None, description="Detailed explanation of the rule, formula, or logic that was violated")
    full_solution: str = Field(..., description="Complete, correct step-by-step solution to the task")
    analogous_example: Optional[AnalogousExample] = Field(None, description="A simpler analogous example to solidify understanding")
    correct_rationale: Optional[str] = Field(None, description="Brief explanation of why the solution is valid (if correct)")
    key_takeaways: List[str] = Field(default_factory=list, description="Key principles, rules, or test strategies to remember")
