const Country = require('../models/Country')
const { createOptions } = require('./utils')

function findAll (params) {
  const options = createOptions('country', params)
  const countries = Country.findAll(options)

  return countries
}

module.exports = {
  findAll
}
