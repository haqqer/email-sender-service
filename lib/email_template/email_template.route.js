const router = require('express').Router()
const email_template = require('./email_template.controller')

router.get('/', (req, res) => {
  res.json({ status: 'email template' })
})
router.post('/', email_template.send)

module.exports = router
