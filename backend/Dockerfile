FROM node

WORKDIR /backend

COPY ["package*.json","/backend"]

RUN npm install

COPY . /backend/

EXPOSE 4000

CMD [ "node", "app.js" ]