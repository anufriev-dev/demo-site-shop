const connection                  = require('../config/db')


class ModelProduct {
  static getProductId(id) {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM product WHERE productid = ?",
      [id],
      (err,data) => {
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
      connection.query("DELETE FROM product WHERE productid = ?",
      [id],
      (err,data) => {
        if(err){
          rej(err)
        }
        res(data)
      })
    })
  }
  static findPost (id) {
    return new Promise((res,rej) => {
      connection.query("SELECT * FROM product WHERE productid = ?",
      [id],
      (err,data) => {
        if(err) {
          rej(err)
        }
        res(data)
      })
    })
  }
  static createPost (title,price,rating,descpost,filename,articul) {
    return new Promise ((res, rej) => {
      connection.query(
  "INSERT INTO product (productid,title,price,rating,descpost,img,articul) VALUES (NULL,?,?,?,?,?,?)",
  [title,price,rating,descpost,filename,articul],
  (err,data) => {
          if(err) {
            rej(err)
          }
          res(data)
        })
    })
  }
  static updatePost (title,price,rating,descpost,filename,id) {
    return new Promise((res, rej) => {
      connection.query(
  "UPDATE product SET img = ?, title = ?, price = ?,rating = ?, descpost = ? WHERE productid = ?",
  [filename,title,price,rating,descpost,id],
  (err,data) => {
          if(err){ 
            rej(err)
          }
          res(data)
        })
    })
  }
  static updatePostaPatch(name,pole,id) {
    return new  Promise ((res,rej) =>{
      connection.query("UPDATE product SET ? = ? WHERE productid = ?",
      [name,pole,id],
      (err,data) => {
        if (err) rej(err)
        
        res(data)
      })
    })
  }
}
module.exports = ModelProduct