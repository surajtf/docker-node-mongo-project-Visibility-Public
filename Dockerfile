FROM node:18

WORKDIR /app

COPY App/package*.json ./

RUN npm install

COPY App .

EXPOSE 3000

CMD ["node", "server.js"]