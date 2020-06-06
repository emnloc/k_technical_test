var express = require('express')
var router = express.Router()

const { parseParams } = require('./utils')

const tracksService = require('../services/tracks_service')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const params = parseParams('tracks', req.query)
    const response = await tracksService.findAll(params)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

module.exports = router
