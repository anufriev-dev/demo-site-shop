const connection                  = require('../config/db')


class ModeleAuth {
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