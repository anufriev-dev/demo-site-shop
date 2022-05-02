const jwt                         = require('jsonwebtoken')
require('dotenv').config({path: __dirname + '../config/.env'})

module.exports = function (role) {
  return function (req,res, next){
    try {
      if(req.method == 'OPTIONS'){
        next()
      }
      let token = req.headers.authorization
      if(!token) {
        return res.status(400).json({message: "Токен отсутствует"})
      }
      token = token.split(' ')[1];
      const isToken = jwt.verify(token, process.env.JWT_SECRET)

      if(role.includes(isToken.roleid)) {
        next()
      }else{
        return res.status(400).json('У вас нет доступа')
      }
  
    } catch (e) {
      console.log(e)
      return res.status(403).send({message: 'пользователь не авторизован'})
    }
  }
}