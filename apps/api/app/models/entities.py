import uuid
from datetime import datetime, date, timezone
from typing import Optional, List, Any
from decimal import Decimal
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import (
    String, Text, Boolean, Integer, Numeric, Date, DateTime, ForeignKey, 
    Enum, JSON, UniqueConstraint, Index
)
from app.models.base import Base, utc_now
from app.models.enums import (
    UserRole, IeltsTargetBand, DatePrecision, SatMonth, ExamType,
    ExamSectionKind, QuestionType, AttemptStatus, AiWritingEvalStatus,
    FlashcardDeck, AuditAction
)

def generate_uuid() -> str:
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    username: Mapped[str] = mapped_column(String(64), unique=True, index=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[UserRole] = mapped_column(Enum(UserRole), default=UserRole.student, index=True, nullable=False)
    email_verified_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    # Relationships
    profile: Mapped[Optional["UserProfile"]] = relationship("UserProfile", back_populates="user", uselist=False, cascade="all, delete-orphan")
    attempts: Mapped[List["UserAttempt"]] = relationship("UserAttempt", back_populates="user", cascade="all, delete-orphan")
    flashcard_progress: Mapped[List["UserFlashcardProgress"]] = relationship("UserFlashcardProgress", back_populates="user", cascade="all, delete-orphan")
    created_exams: Mapped[List["Exam"]] = relationship("Exam", back_populates="created_by", foreign_keys="Exam.created_by_id")
    created_flashcards: Mapped[List["Flashcard"]] = relationship("Flashcard", back_populates="created_by", foreign_keys="Flashcard.created_by_id")
    writing_evaluations: Mapped[List["AiWritingEvaluation"]] = relationship("AiWritingEvaluation", back_populates="user", foreign_keys="AiWritingEvaluation.user_id", cascade="all, delete-orphan")
    writing_reviews: Mapped[List["AiWritingEvaluation"]] = relationship("AiWritingEvaluation", back_populates="reviewer", foreign_keys="AiWritingEvaluation.reviewer_id")
    audit_logs_as_actor: Mapped[List["AuditLog"]] = relationship("AuditLog", back_populates="actor", foreign_keys="AuditLog.actor_id")
    audit_logs_as_target: Mapped[List["AuditLog"]] = relationship("AuditLog", back_populates="target_user", foreign_keys="AuditLog.target_user_id")

class UserProfile(Base):
    __tablename__ = "user_profiles"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    user_id: Mapped[str] = mapped_column(String(36), ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    
    # IELTS onboarding fields
    ielts_current_band: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ielts_current_unknown: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    ielts_target_band: Mapped[Optional[IeltsTargetBand]] = mapped_column(Enum(IeltsTargetBand), nullable=True)
    ielts_previous: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ielts_planned_date: Mapped[Optional[date]] = mapped_column(Date, nullable=True)
    ielts_planned_year: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    ielts_planned_month: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    ielts_date_precision: Mapped[Optional[DatePrecision]] = mapped_column(Enum(DatePrecision), nullable=True)
    ielts_onboarding_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    # SAT onboarding fields
    sat_current_score: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    sat_current_unknown: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    sat_target_score: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    sat_target_is_plus: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    sat_previous: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    sat_session_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("sat_official_sessions.id", ondelete="SET NULL"), nullable=True, index=True)
    sat_onboarding_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    onboarding_completed: Mapped[bool] = mapped_column(Boolean, default=False, index=True, nullable=False)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    # Relationships
    user: Mapped["User"] = relationship("User", back_populates="profile")
    sat_session: Mapped[Optional["SatOfficialSession"]] = relationship("SatOfficialSession", back_populates="profiles")

class SatOfficialSession(Base):
    __tablename__ = "sat_official_sessions"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    month: Mapped[SatMonth] = mapped_column(Enum(SatMonth), nullable=False)
    start_date: Mapped[date] = mapped_column(Date, nullable=False)
    registration_deadline: Mapped[Optional[date]] = mapped_column(Date, nullable=True)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    profiles: Mapped[List["UserProfile"]] = relationship("UserProfile", back_populates="sat_session")

    __table_args__ = (
        UniqueConstraint("year", "month", name="uq_sat_session_year_month"),
        Index("ix_sat_session_published_start", "is_published", "start_date"),
    )

class Exam(Base):
    __tablename__ = "exams"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    exam_type: Mapped[ExamType] = mapped_column(Enum(ExamType), nullable=False)
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    is_published: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    created_by_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    created_by: Mapped[Optional["User"]] = relationship("User", back_populates="created_exams", foreign_keys=[created_by_id])
    sections: Mapped[List["ExamSection"]] = relationship("ExamSection", back_populates="exam", cascade="all, delete-orphan", order_by="ExamSection.sort_order")
    attempts: Mapped[List["UserAttempt"]] = relationship("UserAttempt", back_populates="exam")

    __table_args__ = (
        Index("ix_exams_type_published", "exam_type", "is_published"),
    )

class ExamSection(Base):
    __tablename__ = "exam_sections"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    exam_id: Mapped[str] = mapped_column(String(36), ForeignKey("exams.id", ondelete="CASCADE"), nullable=False)
    kind: Mapped[ExamSectionKind] = mapped_column(Enum(ExamSectionKind), nullable=False)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    module_index: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    duration_sec: Mapped[int] = mapped_column(Integer, nullable=False)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    instructions: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    exam: Mapped["Exam"] = relationship("Exam", back_populates="sections")
    questions: Mapped[List["Question"]] = relationship("Question", back_populates="exam_section", cascade="all, delete-orphan", order_by="Question.sort_order")
    listening_cues: Mapped[List["ListeningCue"]] = relationship("ListeningCue", back_populates="exam_section", cascade="all, delete-orphan", order_by="ListeningCue.sort_order")
    attempts: Mapped[List["UserAttempt"]] = relationship("UserAttempt", back_populates="exam_section")

    __table_args__ = (
        Index("ix_exam_sections_exam_sort", "exam_id", "sort_order"),
    )

class ListeningCue(Base):
    __tablename__ = "listening_cues"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    exam_section_id: Mapped[str] = mapped_column(String(36), ForeignKey("exam_sections.id", ondelete="CASCADE"), nullable=False)
    audio_url: Mapped[str] = mapped_column(String(2048), nullable=False)
    start_ms: Mapped[int] = mapped_column(Integer, nullable=False)
    end_ms: Mapped[int] = mapped_column(Integer, nullable=False)
    label: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    exam_section: Mapped["ExamSection"] = relationship("ExamSection", back_populates="listening_cues")
    questions: Mapped[List["Question"]] = relationship("Question", back_populates="audio_cue")

    __table_args__ = (
        Index("ix_listening_cues_section_sort", "exam_section_id", "sort_order"),
    )

class Question(Base):
    __tablename__ = "questions"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    exam_section_id: Mapped[str] = mapped_column(String(36), ForeignKey("exam_sections.id", ondelete="CASCADE"), nullable=False)
    question_type: Mapped[QuestionType] = mapped_column(Enum(QuestionType), nullable=False)
    content: Mapped[Any] = mapped_column(JSON, nullable=False)
    options: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
    correct_answer: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
    hint: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    explanation: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    has_latex: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    audio_cue_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("listening_cues.id", ondelete="SET NULL"), nullable=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    points: Mapped[float] = mapped_column(Numeric(6, 2), default=1.0, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    exam_section: Mapped["ExamSection"] = relationship("ExamSection", back_populates="questions")
    audio_cue: Mapped[Optional["ListeningCue"]] = relationship("ListeningCue", back_populates="questions")
    answers: Mapped[List["UserAnswer"]] = relationship("UserAnswer", back_populates="question")
    writing_evaluations: Mapped[List["AiWritingEvaluation"]] = relationship("AiWritingEvaluation", back_populates="question")

    __table_args__ = (
        Index("ix_questions_section_sort", "exam_section_id", "sort_order"),
        Index("ix_questions_audio_cue", "audio_cue_id"),
    )

class UserAttempt(Base):
    __tablename__ = "user_attempts"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    user_id: Mapped[str] = mapped_column(String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    exam_id: Mapped[str] = mapped_column(String(36), ForeignKey("exams.id", ondelete="RESTRICT"), nullable=False)
    exam_section_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("exam_sections.id", ondelete="SET NULL"), nullable=True)
    status: Mapped[AttemptStatus] = mapped_column(Enum(AttemptStatus), default=AttemptStatus.in_progress, nullable=False)
    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    submitted_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    score: Mapped[Optional[float]] = mapped_column(Numeric(8, 2), nullable=True)
    max_score: Mapped[Optional[float]] = mapped_column(Numeric(8, 2), nullable=True)
    module_index: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    adaptive_path: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    user: Mapped["User"] = relationship("User", back_populates="attempts")
    exam: Mapped["Exam"] = relationship("Exam", back_populates="attempts")
    exam_section: Mapped[Optional["ExamSection"]] = relationship("ExamSection", back_populates="attempts")
    answers: Mapped[List["UserAnswer"]] = relationship("UserAnswer", back_populates="attempt", cascade="all, delete-orphan")
    writing_evaluations: Mapped[List["AiWritingEvaluation"]] = relationship("AiWritingEvaluation", back_populates="attempt")

    __table_args__ = (
        Index("ix_attempts_user_started", "user_id", "started_at"),
        Index("ix_attempts_exam_status", "exam_id", "status"),
    )

class UserAnswer(Base):
    __tablename__ = "user_answers"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    attempt_id: Mapped[str] = mapped_column(String(36), ForeignKey("user_attempts.id", ondelete="CASCADE"), nullable=False)
    question_id: Mapped[str] = mapped_column(String(36), ForeignKey("questions.id", ondelete="RESTRICT"), nullable=False)
    answer: Mapped[Any] = mapped_column(JSON, nullable=False)
    is_correct: Mapped[Optional[bool]] = mapped_column(Boolean, nullable=True)
    awarded_points: Mapped[Optional[float]] = mapped_column(Numeric(6, 2), nullable=True)
    answered_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)

    attempt: Mapped["UserAttempt"] = relationship("UserAttempt", back_populates="answers")
    question: Mapped["Question"] = relationship("Question", back_populates="answers")

    __table_args__ = (
        UniqueConstraint("attempt_id", "question_id", name="uq_user_answers_attempt_question"),
        Index("ix_user_answers_question", "question_id"),
    )

class Flashcard(Base):
    __tablename__ = "flashcards"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    front: Mapped[str] = mapped_column(Text, nullable=False)
    back: Mapped[str] = mapped_column(Text, nullable=False)
    deck: Mapped[FlashcardDeck] = mapped_column(Enum(FlashcardDeck), default=FlashcardDeck.mixed, nullable=False, index=True)
    tags: Mapped[Any] = mapped_column(JSON, default=list, nullable=False)
    created_by_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    created_by: Mapped[Optional["User"]] = relationship("User", back_populates="created_flashcards", foreign_keys=[created_by_id])
    progress: Mapped[List["UserFlashcardProgress"]] = relationship("UserFlashcardProgress", back_populates="flashcard", cascade="all, delete-orphan")

class UserFlashcardProgress(Base):
    __tablename__ = "user_flashcards_progress"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    user_id: Mapped[str] = mapped_column(String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    flashcard_id: Mapped[str] = mapped_column(String(36), ForeignKey("flashcards.id", ondelete="CASCADE"), nullable=False)
    ease_factor: Mapped[float] = mapped_column(Numeric(4, 2), default=2.5, nullable=False)
    interval_days: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    repetition: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    next_review: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    last_reviewed_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    last_quality: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)

    user: Mapped["User"] = relationship("User", back_populates="flashcard_progress")
    flashcard: Mapped["Flashcard"] = relationship("Flashcard", back_populates="progress")

    __table_args__ = (
        UniqueConstraint("user_id", "flashcard_id", name="uq_user_flashcard_progress"),
        Index("ix_flashcard_user_next_review", "user_id", "next_review"),
    )

class AiWritingEvaluation(Base):
    __tablename__ = "ai_writing_evaluations"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    user_id: Mapped[str] = mapped_column(String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    attempt_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("user_attempts.id", ondelete="SET NULL"), nullable=True)
    question_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("questions.id", ondelete="SET NULL"), nullable=True)
    task_type: Mapped[str] = mapped_column(String(8), nullable=False)
    prompt_text: Mapped[str] = mapped_column(Text, nullable=False)
    essay_text: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[AiWritingEvalStatus] = mapped_column(Enum(AiWritingEvalStatus), default=AiWritingEvalStatus.ai_pending, nullable=False, index=True)

    # AI scores (4 IELTS criteria)
    ai_task_achievement: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ai_coherence: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ai_lexical: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ai_grammar: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ai_overall: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    ai_feedback: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)

    # Human override
    human_override_task_achievement: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    human_override_coherence: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    human_override_lexical: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    human_override_grammar: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    human_override_overall: Mapped[Optional[float]] = mapped_column(Numeric(3, 1), nullable=True)
    human_override_comment: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    reviewer_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("users.id", ondelete="SET NULL"), nullable=True, index=True)
    reviewed_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False)

    user: Mapped["User"] = relationship("User", back_populates="writing_evaluations", foreign_keys=[user_id])
    reviewer: Mapped[Optional["User"]] = relationship("User", back_populates="writing_reviews", foreign_keys=[reviewer_id])
    attempt: Mapped[Optional["UserAttempt"]] = relationship("UserAttempt", back_populates="writing_evaluations")
    question: Mapped[Optional["Question"]] = relationship("Question", back_populates="writing_evaluations")

    __table_args__ = (
        Index("ix_writing_eval_user_created", "user_id", "created_at"),
    )

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=generate_uuid)
    actor_id: Mapped[str] = mapped_column(String(36), ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    target_user_id: Mapped[Optional[str]] = mapped_column(String(36), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    action: Mapped[AuditAction] = mapped_column(Enum(AuditAction), nullable=False)
    entity_type: Mapped[str] = mapped_column(String(64), nullable=False)
    entity_id: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    before: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
    after: Mapped[Optional[Any]] = mapped_column(JSON, nullable=True)
    ip: Mapped[Optional[str]] = mapped_column(String(45), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)

    actor: Mapped["User"] = relationship("User", back_populates="audit_logs_as_actor", foreign_keys=[actor_id])
    target_user: Mapped[Optional["User"]] = relationship("User", back_populates="audit_logs_as_target", foreign_keys=[target_user_id])

    __table_args__ = (
        Index("ix_audit_actor_created", "actor_id", "created_at"),
        Index("ix_audit_target_created", "target_user_id", "created_at"),
        Index("ix_audit_entity", "entity_type", "entity_id"),
    )
