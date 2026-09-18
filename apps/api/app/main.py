from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.config import settings
from app.core.database import init_db, AsyncSessionLocal
from app.services.seed import seed_database
from app.api.v1.router import api_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize tables and seed official dates & admin user
    await init_db()
    async with AsyncSessionLocal() as session:
        await seed_database(session)
    yield

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Custom validation error handler conforming to OpenAPI schema
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    details = []
    for error in exc.errors():
        loc = [str(l) for l in error.get("loc", [])]
        msg = error.get("msg", "Invalid value")
        details.append({"loc": loc, "msg": msg})

    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "code": "validation_error",
            "message": "Validation failed",
            "details": details,
        },
    )

# Custom HTTP exception handler conforming to OpenAPI Error schema
@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    if isinstance(exc.detail, dict):
        return JSONResponse(
            status_code=exc.status_code,
            content=exc.detail,
        )
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "code": "error",
            "message": str(exc.detail),
            "field": None,
        },
    )

# Healthcheck
@app.get("/health", tags=["Health"])
@app.get(f"{settings.API_V1_STR}/health", tags=["Health"])
async def health_check():
    return {"status": "ok", "version": settings.VERSION}

# Include API v1 Router
app.include_router(api_router, prefix=settings.API_V1_STR)
