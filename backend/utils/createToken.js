const jwt                         = require('jsonwebtoken')

module.exports = createToken = function (id, roleid) {
  const payload = {
    id,
    roleid
  }
  return  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: '24h'})
}