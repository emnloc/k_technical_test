const Track = require('../models/Track')
const { createOptions } = require('./utils')

function findAll (params) {
  const options = createOptions('tracks', params)
  const tracks = Track.findAll(options)

  return tracks
}

module.exports = {
  findAll
}
