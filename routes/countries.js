var express = require('express')
var router = express.Router()

const { parseParams } = require('./utils')

const countriesService = require('../services/countries_service')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const params = parseParams('country', req.query)
    const response = await countriesService.findAll(params)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

module.exports = router
