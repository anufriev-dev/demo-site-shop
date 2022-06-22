/*
 *  Пагинация страниц (Deprecated)
 */

const pagination = (model) => {
  return async function (req,res,next) {
    let page = parseInt(req.params.page)
    let limit = parseInt(req.params.limit)

    let startIndex = (page - 1) * limit
    let endIndex = page * limit

    let result = {}

    result.length = (await model()).length

    result.data = (await model()).slice(startIndex,endIndex)
    res.paginationResult = result
    next()
  }
}

module.exports = pagination;