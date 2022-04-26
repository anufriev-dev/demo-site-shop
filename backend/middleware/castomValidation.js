module.exports.validBody = (req,res,next) => {
  if(req.body.title === '') {
    return res.status(400).json({message: `Название не указано`})  
  }
  if(!Number(req.body.price)) {
    return res.status(400).json({message: `прайс указан неверно`})  
  }
  if(req.files === null) {
    return res.status(400).json({message: `поле файл не должно быть пустым`})
  }
  next()
}