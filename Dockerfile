FROM node:carbon-alpine

WORKDIR /app

RUN apk add python make g++

COPY package*.json ./

RUN npm install --unsafe-perm=true

COPY . .

CMD ["npm", "run", "dev"]


