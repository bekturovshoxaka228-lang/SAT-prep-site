import pytest
import os
from typing import AsyncGenerator
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession

# Use a test in-memory/file sqlite db
TEST_DB_URL = "sqlite+aiosqlite:///./test.db"
os.environ["DATABASE_URL"] = TEST_DB_URL

from app.core.database import get_db
from app.models.base import Base
from app.main import app

test_engine = create_async_engine(TEST_DB_URL, connect_args={"check_same_thread": False})
TestSessionLocal = async_sessionmaker(test_engine, expire_on_commit=False)

async def override_get_db() -> AsyncGenerator[AsyncSession, None]:
    async with TestSessionLocal() as session:
        yield session

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture(autouse=True)
async def prepare_database():
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    
    # Seed official dates into test db
    from app.services.seed import seed_database
    async with TestSessionLocal() as session:
        await seed_database(session)
    yield
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

@pytest.fixture
async def client() -> AsyncGenerator[AsyncClient, None]:
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac
