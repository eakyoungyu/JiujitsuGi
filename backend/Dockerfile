FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y python3-pip python3-dev pipenv && \
    apt-get clean

WORKDIR /ddobok
ADD . /ddobok

RUN pipenv install --system --deploy --ignore-pipfile

EXPOSE 8000
#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:80"]