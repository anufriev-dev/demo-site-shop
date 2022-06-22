/*
 *  Формирование JWT токена
 * 
 *  1) Принимает Payload
 *  2) Возвращает token который валиден 24 часа
 * 
 */

const jwt                         = require('jsonwebtoken')


module.exports = createToken = function (id, roleid) {
  const payload = {
    id,
    roleid
  }
  return  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: '24h'})
}