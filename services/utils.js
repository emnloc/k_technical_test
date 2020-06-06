const Op = require('sequelize').Op

const fixedFields = {
  users: {
    status: true
  },
  albums: {
    status: true,
    userid: true
  },
  tracks: {
    albumid: true,
    userid: true
  },
  country: {}
}

function createOptions (type, params) {
  const options = {}
  if (params.filters) {
    Object.keys(params.filters).forEach(o => {
      if (!options.where) {
        options.where = {}
      }

      if (fixedFields[type][o]) {
        options.where[o] = params.filters[o]
      } else {
        options.where[o] = {
          [Op.like]: `%${params.filters[o]}%`
        }
      }
    })
  }

  if (params.sort) {
    params.sort.forEach(s => {
      if (!options.order) {
        options.order = []
      }
      options.order.push([s, params.sortType])
    })
  }

  if (params.page) {
    const offset = params.page * params.pageSize - params.pageSize
    if (!options.limit) {
      options.limit = params.pageSize
      options.offset = offset
    }
  }

  return options
}

module.exports = {
  createOptions
}
