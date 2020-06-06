var express = require('express')
var router = express.Router()

const { parseParams } = require('./utils')

const userService = require('../services/user_service')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const params = parseParams('users', req.query)
    const response = await userService.findAll(params)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

router.get('/:id', async function (req, res, next) {
  try {
    const id = req.params.id
    const response = await userService.find(id)
    res.status(response ? 200 : 404).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

router.delete('/:id', async function (req, res, next) {
  try {
    const id = req.params.id
    const response = await userService.find(id)
    let code = 200
    if (!response) {
      code = 404
    } else {
      response.destroy()
    }
    res.status(code).json(null)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

router.post('/', async function (req, res, next) {
  try {
    const response = await userService.create(req.body)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

module.exports = router
