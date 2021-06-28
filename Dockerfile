FROM node:lts

ADD . /app/
WORKDIR /app

EXPOSE 3000