FROM node:18.0.0

WORKDIR /backend

COPY ["package*.json","/backend"]

RUN npm install

COPY . /backend/

EXPOSE 4000

CMD [ "node", "app.js" ]