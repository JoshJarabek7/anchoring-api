"""Configuration management."""
import os
from typing import Any

from pydantic import PostgresDsn, AnyHttpUrl, model_validator
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str
    PROJECT_DESCRIPTION: str

    # CORS
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000"]

    # PostgreSQL
    POSTGRES_HOST: str
    POSTGRES_PORT: int
    POSTGRES_USERNAME: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_URI: PostgresDsn | None = None


    @model_validator(mode='after')
    def assemble_postgres_uri(self):
        if not self.POSTGRES_URI:
            self.POSTGRES_URI = PostgresDsn.build(
            scheme="postgresql+asyncpg",
            username=self.POSTGRES_USERNAME,
            password=self.POSTGRES_PASSWORD,
            host=self.POSTGRES_HOST,
            port=self.POSTGRES_PORT
        )
        return self
    

    # Vector Database (e.g., Qdrant)
    QDRANT_HOST: str
    QDRANT_PORT: int
    QDRANT_API_KEY: str

    # Redis
    REDIS_HOST: str
    REDIS_PORT: int

    # Security
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # Logging
    LOG_LEVEL: str = "INFO"

    DB_ECHO: bool = False

settings = Settings()
            



