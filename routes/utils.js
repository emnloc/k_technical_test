const validFields = {
  users: {
    name: 'string',
    email: 'string',
    status: 'number',
    countrycode: 'string'
  },
  tracks: {
    title: 'string',
    artist: 'string',
    isrc: 'string',
    albumid: 'number',
    genre: 'string',
    status: 'number'
  },
  albums: {
    title: 'string',
    artist: 'string',
    label: 'string',
    upc: 'string',
    genre: 'string',
    userid: 'number',
    status: 'number'
  },
  country: {
    code: 'string',
    name: 'string'
  }
}

const PAGE_SIZE = 10
const SORT_TYPE = 'asc'

function parseParams (type, params) {
  let filtersParams = []
  const filters = {}
  let sortParams = []
  const sortFields = []
  let page = 1
  let pageSize = PAGE_SIZE
  let sortType = SORT_TYPE
  if (params.filter) {
    filtersParams = params.filter
    Object.keys(filtersParams).forEach(f => {
      const filterName = validFields[type][f]
      if (filterName) {
        if (filterName === 'number') {
          if (!isNaN(filtersParams[f])) {
            filters[f] = parseInt(filtersParams[f], 10)
          }
        } else {
          filters[f] = filtersParams[f]
        }
      }
    })
  }
  if (params.sort) {
    sortParams = Array.isArray(params.sort) ? params.sort : [params.sort]
    sortParams.forEach(s => {
      const sortFieldName = validFields[type][s]
      if (sortFieldName) {
        sortFields.push(s)
      }
    })
    if (params.sort_type && (params.sort_type.toLowerCase() === 'desc' || params.sort_type.toLowerCase() === 'asc')) {
      sortType = params.sort_type
    }
  }
  if (params.page && !isNaN(params.page)) {
    page = parseInt(params.page, 10)
    if (params.page_size && !isNaN(params.page_size)) {
      pageSize = parseInt(params.page_size)
    }
  }

  return {
    filters,
    sort: sortFields,
    sortType,
    page,
    pageSize
  }
}

module.exports = {
  parseParams
}
