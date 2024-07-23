
const paginatedData = function (model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    //index of a item in array starts from 0 however pages's index starts from 1
    const startIndex = (page - 1) * limit || 1
    const endIndex = page * limit || 5

    const results = {}

    results.resultedUsers = model.slice(startIndex, endIndex)

    if (model.length > endIndex) {
      results.next = {
        page: page + 1,
        limit: limit,
      }
    }
    // as page 0 isnt possible
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      }
    }
    req.paginatedData = results
    next()
  }
}

module.exports = paginatedData
