FROM node:18.0.0

  # сделать папку /backend текущим рабочим каталогом
WORKDIR /backend

  # скопировать 'package.json' и 'package-lock.json' (если есть)
COPY ["package*.json","/backend"]

  # установить зависимости проекта
RUN npm install

  # скопировать файлы и папки проекта в текущий рабочий каталог (т.е. в папку «backend»)
COPY . /backend/

EXPOSE 4000

  # запустить сервер
CMD [ "node", "app.js" ]