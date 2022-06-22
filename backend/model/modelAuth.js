/*
 *  Запросы к базе данных: Авторизация && Регистрация
 * 
 *  1) Получить пользователя по login
 *  2) Создание пользователя
 */

const connection                  = require('../config/db')


class ModeleAuth {
  // Вытаскиваем данные пользователя по логину
  static getLogin (login) {
    return new Promise ((res,rej) => {
      connection.query("SELECT * FROM user WHERE login = ?",
      [login],
      (err, data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }
  // Создаём пользователя
  static createCell (pass,login,emile,role = 'USER') {
    return new Promise ((res,rej) => {
      connection.query(
        "INSERT INTO user (id,login,pass,roleid,emile) VALUES (NULL,?,?,?,?)",
        [login,pass,role,emile],
        (err,data) => {
          if(err) {
            rej({err})
          }
          res({message: 'Пользователь создан!',data})
        })
    })
  }
}

module.exports = ModeleAuth