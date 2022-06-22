/*
 *  Валидация (вариант моей реализации) специфично для проекта
 */

module.exports.validBody = (req,res,next) => {
  if(req.body.title === '') {
    return res.status(400).json({message: `Название не указано`})  
  }
  if(!Number(req.body.price)) {
    return res.status(400).json({message: `прайс указан неверно`})  
  }
  if(req.body.descpost === ''	) {
    return res.status(400).json({message: `Описание не указанно`}) 
  }
  if( req.body.rating === '' || req.body.rating <= 0 || req.body.rating >= 6) {
    return res.status(400).json({message: `Рейтинг указан не верно`}) 
  }
  if(req.files === null) {
    return res.status(400).json({message: `поле файл не должно быть пустым`})
  }
  next()
}