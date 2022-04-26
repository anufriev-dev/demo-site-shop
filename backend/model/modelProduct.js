const connection = require('../config/db')

class ModelProduct {
  static getProductId(id) {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM product WHERE productid = '"+ id +"'",(err,data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }

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
  static deletePost(id) {
    return new Promise((res,rej) => {
      connection.query("DELETE FROM product WHERE productid = '"+ id +"'",(err,data) => {
        if(err){
          rej(err)
        }
        res(data)
      })
    })
  }
  static findPost (id) {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM product WHERE productid = '"+ id +"'",(err,data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }
  static createPost (title,price,filename) {
    return new Promise ((res, rej) => {
      connection.query(
  "INSERT INTO product (productid,title,price,img) VALUES (NULL,'"+ title +"','"+ price +"','"+ filename +"')", (err,data) => {
          if(err) {
            rej(err)
          }
          res(data)
        })
    })
  }
  static updatePost (title,price,filename,id) {
    return new Promise((res, rej) => {
      connection.query(
        "UPDATE product SET img = '"+ filename  +"', title = '"+ title +"', price = '"+ price +"' WHERE productid = '"+ id +"'",(err,data) => {
          if(err){ 
            rej(err)
          }
          res(data)
        })
    })
  }
}
module.exports = ModelProduct