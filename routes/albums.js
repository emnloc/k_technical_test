var express = require('express')
var router = express.Router()

const { parseParams } = require('./utils')

const albumsService = require('../services/albums_service')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const params = parseParams('albums', req.query)
    const response = await albumsService.findAll(params)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

module.exports = router
