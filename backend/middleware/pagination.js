
const pagination = (model) => {
  return async function (req,res,next) {
    let page = parseInt(req.params.page)
    let limit = parseInt(req.params.limit)

    let startIndex = (page - 1) * limit
    let endIndex = page * limit

    let result = {}

    // if(endIndex < (await model()).length){
    //   result.nextPage = {
    //     page: page + 1
    //   }
    // }

    // if(startIndex > 0){
    //   result.previousePage = {
    //     page: page - 1
    //   }
    // }
    result.length = (await model()).length

    result.data = (await model()).slice(startIndex,endIndex)
    res.paginationResult = result
    next()
  }
}

module.exports = pagination;