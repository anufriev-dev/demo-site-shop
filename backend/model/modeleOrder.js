/*
 *  Запросы к базе данных: Заказы
 * 
 *  1) Создать заказ
 *  2) Получить все заказы
 *  3) Получить один заказ
 *  4) Удалить заказы
 */

const connection                  = require('../config/db')


class ModeleOrder {
  // Создать заказ 
  static orderBy (articul,email,textArea) {
    return new Promise ((res,rej) => {
      connection.query(
        "INSERT INTO orderby (allArticul, email, text, idorder) VALUES (?,?,?, NULL)",
        [articul,email,textArea],
        (err,data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }
  // Получить все заказы в виде объекта
  static orderGetAll () {
    return new Promise ((res,rej) => {
      connection.query("SELECT * FROM orderby", (err,data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }
  // Получить один заказ по id
  static orderGetOne (id) {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM orderby WHERE idorder = ?",
      [id],
      (err,data) => {
        if(err){
          rej(err)
        }
        res(data)
      })
    })
  }
  // Удалить заказ по id
  static deleteOrderByOne (id) {
    return new Promise((res,rej) => {
      connection.query("DELETE FROM orderby WHERE idorder = ?",[id],(err,data) => {
        if(err) {
          rej(err)
        }
        res()
      })
    })
  }
}

module.exports = ModeleOrder