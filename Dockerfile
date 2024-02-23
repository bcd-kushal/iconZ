FROM node:20-alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package*.json ./

RUN npm install 

COPY dist/* ./

ENV PORT=5001

EXPOSE 5001

CMD [ "npm", "start" ]