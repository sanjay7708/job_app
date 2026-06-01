FROM node:20-alphine AS build

WORKDIR /jobsite

COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173
RUN ["npm","run","dev","--","--host"]

