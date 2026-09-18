from datetime import date, datetime, timezone
from typing import Dict, Any
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func

from app.core.database import get_db
from app.core.dependencies import get_current_user, require_roles
from app.models.entities import (
    User, UserProfile, UserAttempt, Exam, ExamSection, ListeningCue,
    Question, AiWritingEvaluation, AuditLog
)
from app.models.enums import UserRole, AiWritingEvalStatus, AuditAction
from app.models.base import utc_now
from app.schemas.admin import (
    AdminDashboardStats,
    AdminCreateTestRequest,
    ExamResponse,
    WritingOverrideRequest,
    AiWritingEvaluationResponse,
)
from app.schemas.common import ErrorResponse, ValidationErrorResponse

router = APIRouter()

@router.get(
    "/dashboard-stats",
    response_model=AdminDashboardStats,
    status_code=status.HTTP_200_OK,
    dependencies=[Depends(require_roles(UserRole.admin, UserRole.content_manager, UserRole.moderator))],
)
async def admin_dashboard_stats(
    db: AsyncSession = Depends(get_db),
) -> AdminDashboardStats:
    # 1. Users total
    res_users = await db.execute(select(func.count(User.id)))
    users_total = res_users.scalar() or 0

    # 2. Users onboarded
    res_onboarded = await db.execute(
        select(func.count(UserProfile.id)).where(UserProfile.onboarding_completed.is_(True))
    )
    users_onboarded = res_onboarded.scalar() or 0

    # 3. Attempts today
    today_start = datetime.now(timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0)
    res_att = await db.execute(
        select(func.count(UserAttempt.id)).where(UserAttempt.started_at >= today_start)
    )
    attempts_today = res_att.scalar() or 0

    # 4. Writing queue pending (ai_done or human_review)
    res_wq = await db.execute(
        select(func.count(AiWritingEvaluation.id)).where(
            AiWritingEvaluation.status.in_([AiWritingEvalStatus.ai_done, AiWritingEvalStatus.human_review])
        )
    )
    writing_queue_pending = res_wq.scalar() or 0

    # 5. Published exams
    res_exams = await db.execute(
        select(func.count(Exam.id)).where(Exam.is_published.is_(True))
    )
    exams_published = res_exams.scalar() or 0

    return AdminDashboardStats(
        users_total=users_total,
        users_onboarded=users_onboarded,
        attempts_today=attempts_today,
        writing_queue_pending=writing_queue_pending,
        exams_published=exams_published,
    )

@router.post(
    "/tests/create",
    response_model=ExamResponse,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(require_roles(UserRole.admin, UserRole.content_manager))],
)
async def admin_create_test(
    req: AdminCreateTestRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> ExamResponse:
    exam = Exam(
        title=req.title,
        exam_type=req.exam_type,
        description=req.description,
        is_published=req.is_published,
        created_by_id=current_user.id,
    )
    db.add(exam)
    await db.flush()

    for sec_req in req.sections:
        section = ExamSection(
            exam_id=exam.id,
            kind=sec_req.kind,
            title=sec_req.title,
            module_index=sec_req.module_index,
            duration_sec=sec_req.duration_sec,
            sort_order=sec_req.sort_order,
            instructions=sec_req.instructions,
        )
        db.add(section)
        await db.flush()

        cue_map: Dict[str, str] = {}
        for cue_req in sec_req.listening_cues:
            cue = ListeningCue(
                exam_section_id=section.id,
                audio_url=cue_req.audio_url,
                start_ms=cue_req.start_ms,
                end_ms=cue_req.end_ms,
                label=cue_req.label,
                sort_order=cue_req.sort_order,
            )
            db.add(cue)
            await db.flush()
            if cue_req.client_key:
                cue_map[cue_req.client_key] = cue.id

        for q_req in sec_req.questions:
            linked_cue_id = None
            if q_req.audio_cue_client_key and q_req.audio_cue_client_key in cue_map:
                linked_cue_id = cue_map[q_req.audio_cue_client_key]

            question = Question(
                exam_section_id=section.id,
                question_type=q_req.question_type,
                content=q_req.content,
                options=q_req.options,
                correct_answer=q_req.correct_answer,
                hint=q_req.hint,
                explanation=q_req.explanation,
                has_latex=q_req.has_latex,
                audio_cue_id=linked_cue_id,
                sort_order=q_req.sort_order,
                points=q_req.points,
            )
            db.add(question)

    await db.commit()
    await db.refresh(exam)

    return ExamResponse.model_validate(exam)

@router.patch(
    "/writing/{evaluation_id}/override",
    response_model=AiWritingEvaluationResponse,
    status_code=status.HTTP_200_OK,
    dependencies=[Depends(require_roles(UserRole.admin, UserRole.moderator))],
)
async def admin_override_writing(
    evaluation_id: str,
    req: WritingOverrideRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
) -> AiWritingEvaluationResponse:
    stmt = select(AiWritingEvaluation).where(AiWritingEvaluation.id == evaluation_id)
    res = await db.execute(stmt)
    evaluation = res.scalar_one_or_none()

    if not evaluation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"code": "not_found", "message": "Writing evaluation not found"},
        )

    # Save before state for audit log
    before_state = {
        "status": evaluation.status.value,
        "task_achievement": float(evaluation.human_override_task_achievement) if evaluation.human_override_task_achievement else None,
        "coherence": float(evaluation.human_override_coherence) if evaluation.human_override_coherence else None,
        "lexical": float(evaluation.human_override_lexical) if evaluation.human_override_lexical else None,
        "grammar": float(evaluation.human_override_grammar) if evaluation.human_override_grammar else None,
        "overall": float(evaluation.human_override_overall) if evaluation.human_override_overall else None,
    }

    status_enum = AiWritingEvalStatus(req.status)
    evaluation.human_override_task_achievement = req.task_achievement
    evaluation.human_override_coherence = req.coherence
    evaluation.human_override_lexical = req.lexical
    evaluation.human_override_grammar = req.grammar
    evaluation.human_override_overall = req.overall
    evaluation.human_override_comment = req.comment
    evaluation.reviewer_id = current_user.id
    evaluation.reviewed_at = utc_now()
    evaluation.status = status_enum

    # Write audit log
    audit_entry = AuditLog(
        actor_id=current_user.id,
        target_user_id=evaluation.user_id,
        action=AuditAction.override_writing,
        entity_type="ai_writing_evaluations",
        entity_id=evaluation.id,
        before=before_state,
        after={
            "status": req.status,
            "task_achievement": req.task_achievement,
            "coherence": req.coherence,
            "lexical": req.lexical,
            "grammar": req.grammar,
            "overall": req.overall,
            "comment": req.comment,
        },
    )
    db.add(audit_entry)

    await db.commit()
    await db.refresh(evaluation)

    return AiWritingEvaluationResponse.model_validate(evaluation)
