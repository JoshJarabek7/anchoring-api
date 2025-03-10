FROM python:3.13.2-slim-bookworm

RUN apt-get update && apt-get install -y curl git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./requirements/requirements.prod.txt /app/requirements.txt

RUN pip install --upgrade pip && pip install -r requirements.txt

COPY ./src /app/

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]