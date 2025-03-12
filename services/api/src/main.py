from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def create_application() -> FastAPI:
    application = FastAPI(
        docs_url="/api/docs",
        redoc_url="/api/redoc"
    )
    return application

# Create the application instance
app = create_application()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)