const router = require('express').Router()
const delivery = require('./delivery.controller')

router.get('/', (req, res) => {
  res.json({ status: 'email running' })
})
router.post('/', delivery.send)

module.exports = router
