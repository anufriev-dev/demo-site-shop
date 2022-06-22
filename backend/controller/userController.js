/*
 *  Логика: Пользователи
 *  
 *  1) Получить всех пользователей
 */

const modelUser                   = require('../model/modelUser')


class UserController {
  // Получение объекта со всеми пользователями в базе данных
  static async getAllUsers (req,res) {
    let data = await modelUser.getUser()
    res.send(data)
  }
}

module.exports = UserController