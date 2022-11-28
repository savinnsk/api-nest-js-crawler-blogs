FROM node:latest

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm","run","start:dev"]