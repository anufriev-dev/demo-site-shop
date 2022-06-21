FROM node:18.0.0

WORKDIR /frontend

COPY ["package*.json", "/frontend"]

RUN npm install

COPY . /frontend

EXPOSE 3000

CMD ["npm", "run", "start"]