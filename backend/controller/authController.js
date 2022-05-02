const path                        = require('path')
const bcrypt                      = require('bcrypt')
const modeleAuth                  = require('../model/modelAuth')
const {validationResult}          = require('express-validator')
const createToken                 = require('../utils/createToken')

require('dotenv').config({path: path.resolve(__dirname, '..','config','.env')})



class AuthController {
  static async createUser (req,res) {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(400).json({message:'Ошибка при регистрации', errors })
      }
      let {password,login,emile} = req.body
      
      let [candidat] = await modeleAuth.getLogin(login)
      if(candidat) {
       return res.status(400).json({message: 'Пользователь уже существует'})
      }
      let hashPassword = bcrypt.hashSync(password,3);
      let response = await modeleAuth.createCell(hashPassword,login,emile);
      return res.status(201).json(response)
    } catch (e) {
      console.log(e)
    }
  }

  static async auth (req, res) {
    try {
      let {password,login} = req.body
      let [candidat] = await modeleAuth.getLogin(login)
      if(!candidat){
        res.status(400).json(`Пользователь не найден`)
      }
      let validPassword = bcrypt.compareSync(password, candidat.pass)
      if(!validPassword) {
        res.status(403).json('Неверный пароль!!')
      }
      let token = createToken(candidat.id,candidat.roleid)
      return res.status(200).json({token,role: candidat.roleid})
    } catch (e) {
      console.log(e)
    } 
  }
}

module.exports = AuthController