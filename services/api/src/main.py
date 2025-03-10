from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def create_application() -> FastAPI:
    application = FastAPI(
        docs_url="/api/docs",
        redoc_url="/api/redoc"
    )
    return application