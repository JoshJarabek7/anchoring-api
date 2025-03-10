"""Custom exception classes."""
# src/core/exceptions.py
from fastapi import Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

class DocumentNotFound(Exception):
    pass

class LibraryNotFound(Exception):
    pass

class PermissionDenied(Exception):
    pass

async def document_not_found_handler(request: Request, exc: DocumentNotFound):
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={"detail": "Document not found"}
    )

async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={"detail": exc.errors()}
    )

def register_exception_handlers(app):
    app.add_exception_handler(DocumentNotFound, document_not_found_handler)
    app.add_exception_handler(RequestValidationError, validation_exception_handler)
    # Add more exception handlers as needed