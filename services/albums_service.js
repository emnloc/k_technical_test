const Album = require('../models/Album')
const { createOptions } = require('./utils')

function findAll (params) {
  const options = createOptions('albums', params)
  const albums = Album.findAll(options)

  return albums
}

module.exports = {
  findAll
}
