const User = require('../models/User')
const Country = require('../models/Country')
const { createOptions } = require('./utils')

function findAll (params) {
  const options = createOptions('users', params)
  const users = User.findAll(options)

  return users
}

function find (id) {
  return User.findByPk(id)
}

async function create (params) {
  try {
    let country = await Country.findOne({ where: { code: params.countryCode } })

    if (!country) {
      country = await Country.create({
        code: params.countryCode,
        name: params.countryCode
      })
    }

    return User.create(params)
  } catch (err) {
    return null
  }
}

module.exports = {
  findAll,
  find,
  create
}
