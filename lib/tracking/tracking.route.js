const router = require('express').Router()
const tracking = require('./tracking.controller')

router.post('/webhook', tracking.handleEvent)

module.exports = router
