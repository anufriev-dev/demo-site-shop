const connection                  = require('../config/db')

class ModeleOrder {
  static orderBy (articul,email,textArea) {
    return new Promise ((res,rej) => {
      connection.query(
        "INSERT INTO orderby (allArticul, email, text, idorder) VALUES ('"+articul+"', '"+email+"', '"+textArea+"', NULL)",(err,data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }
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
  static orderGetOne (id) {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM orderby WHERE idorder = '"+id+"'",(err,data) => {
        if(err){
          rej(err)
        }
        res(data)
      })
    })
  }
  static deleteOrderByOne (id) {
    return new Promise((res,rej) => {
      connection.query("DELETE FROM orderby WHERE idorder = '"+id+"' ",(err,data) => {
        if(err) {
          rej(err)
        }
        res()
      })
    })
  }
}

module.exports = ModeleOrder