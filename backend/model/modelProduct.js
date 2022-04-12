const connection = require('../config/db')

class ModelProduct {
  static getPost() {
    return new Promise((res,rej) => {
      connection.query('SELECT * FROM product',(err,data) => {
        if(err){
          res(err)
        }
        res(data)
      })
    })
  }
}
module.exports = ModelProduct