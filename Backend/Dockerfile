FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

RUN apt update && apt install pkg-config gcc -y && apt-get install libmariadb-dev -y && pip install -r requirements.txt 

COPY . .

EXPOSE 8005

WORKDIR /app/CommonLawCratsBackend

RUN python3 manage.py makemigrations

RUN python3 manage.py migrate

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8005"]