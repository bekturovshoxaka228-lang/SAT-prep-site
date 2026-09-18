from datetime import date
from typing import List
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.entities import SatOfficialSession
from app.schemas.onboarding import SatOfficialSessionResponse

router = APIRouter()

@router.get(
    "/official-dates",
    response_model=dict[str, List[SatOfficialSessionResponse]],
    summary="List published official SAT test dates",
)
async def list_official_sat_dates(
    include_past: bool = Query(False),
    db: AsyncSession = Depends(get_db),
) -> dict[str, List[SatOfficialSessionResponse]]:
    stmt = select(SatOfficialSession).where(SatOfficialSession.is_published.is_(True))
    if not include_past:
        stmt = stmt.where(SatOfficialSession.start_date >= date.today())
    stmt = stmt.order_by(SatOfficialSession.start_date.asc())

    result = await db.execute(stmt)
    sessions = result.scalars().all()

    return {
        "items": [SatOfficialSessionResponse.model_validate(s) for s in sessions]
    }
