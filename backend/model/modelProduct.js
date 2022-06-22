/*
 *  Запросы к базе данных: Продукция
 * 
 *  1) Получить один продукт
 *  2) Получить всю продукцию
 *  3) Удалить продукт
 *  4) Получить один продукт
 *  5) Создать продукт
 *  6) Обновить продукт
 */

const connection                  = require('../config/db')


class ModelProduct {
  // Получить продукт по id
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
  // Получить все всю продукцию
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
  // Удалить продукт по id
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
  // Получить продукт по id
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
  // Создать продукт
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
  // WARNING (Deprecated) !!! Обновить продукт по любому из полей (НЕ ИСПОЛЬЗОВАТЬ !!!)
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
  // (New) Обновить продукт по любому из полей 
  static updatePostaPatch(name,pole,id) {
    return new  Promise ((res,rej) =>{
      console.log(pole)
      connection.query("UPDATE product SET "+ name +" = ? WHERE productid = ?",
      [pole,id],
      (err,data) => {
        if (err) rej(err)
        
        res(data)
      })
    })
  }
}
module.exports = ModelProduct