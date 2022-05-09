FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN python3 -m pip install --upgrade pip
RUN apk update && apk add python3-dev gcc libc-dev
RUN pip install -r requirements.txt
COPY . .












# FROM ubuntu:20.04

# RUN apt-get update && \
#     apt-get install -y python3-pip python3-dev pipenv && \
#     apt-get clean

# WORKDIR /ddobok
# ADD . /ddobok

# RUN pipenv install --system --deploy --ignore-pipfile

# EXPOSE 8000
# #CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:80"]