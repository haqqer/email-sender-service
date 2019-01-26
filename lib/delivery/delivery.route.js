const router = require('express').Router()
const delivery = require('./delivery.controller')

router.post('/', delivery.send)

module.exports = router
