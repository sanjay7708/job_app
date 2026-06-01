FROM python:3.12
WORKDIR /backend
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000
RUN ["python3","manage.py","runserver"]
