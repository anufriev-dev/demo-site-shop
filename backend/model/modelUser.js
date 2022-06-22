/*
 *  Запросы к базе данных: Пользователи
 * 
 *  1) Получить всех пользователей
 */

const connection                  = require('../config/db')


class ModelUser {
  // Получить всех пользователей
  static getUser() {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM user", (err,data) => {
        if(err){
          res({message:`Ошибка в getUser ${err}`})
        }
        res(data)
      })
    })
  }
}
module.exports = ModelUser