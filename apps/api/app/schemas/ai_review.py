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
    key_takeaways: List[str] = Field(default_factory=list, description="Key principles, rules, or test strategies to remember")

class AskWhyRequest(BaseModel):
    task_prompt: str = Field(..., description="The original task question or prompt")
    question: str = Field(..., description="The student's specific question (e.g. 'Почему Choice C не подходит?')")
    user_solution: Optional[str] = Field(None, description="The user's answer or selected option")
    correct_answer: Optional[str] = Field(None, description="Known correct answer")
    official_explanation: Optional[str] = Field(None, description="Official explanation or context")
    options: Optional[List[dict]] = Field(default_factory=list, description="Question options if available")
    subject: Optional[str] = Field("general", description="Subject area")
    api_key: Optional[str] = Field(None, description="Optional custom Gemini or OpenAI API key")
    provider: Optional[str] = Field("gemini", description="AI Provider")

class FollowUpQuizOption(BaseModel):
    id: str = Field(..., description="Option letter or ID: A, B, C, D")
    text: str = Field(..., description="Option text or mathematical formula")
    is_correct: bool = Field(..., description="Whether this option is correct")
    feedback: str = Field(..., description="Pedagogical feedback explaining why this option is right or wrong")

class FollowUpQuizQuestion(BaseModel):
    question: str = Field(..., description="A quick Socratic check question to verify the student's understanding")
    options: List[FollowUpQuizOption] = Field(default_factory=list, description="List of options for the student")
    explanation: str = Field(..., description="Comprehensive explanation of the check question")

class AskWhyResponse(BaseModel):
    answer: str = Field(..., description="Pedagogical, clear answer explaining 'why' and expanding the solution")
    key_rule: Optional[str] = Field(None, description="Core rule, formula or principle to remember")
    suggested_follow_up: List[str] = Field(default_factory=list, description="Follow-up questions the student can explore")
    follow_up_quiz: Optional[FollowUpQuizQuestion] = Field(None, description="Interactive follow-up check question from the AI")
    detailed_breakdown: Optional[str] = Field(None, description="Expanded in-depth pedagogical breakdown")

