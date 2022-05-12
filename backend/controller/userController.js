const modelUser                   = require('../model/modelUser')


class UserController {
  static async getAllUsers (req,res) {
    let data = await modelUser.getUser()
    res.send(data)
  }
}

module.exports = UserController