FROM node:20.10.0-alpine

WORKDIR /app

COPY . .

RUN npm ci \
    npm run build

EXPOSE 8000
