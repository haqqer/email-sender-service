const router = require('express').Router()
const emailTemplate = require('./email_template.controller')

router.get('/', (req, res) => {
  res.json({ status: 'email template' })
})
router.post('/', emailTemplate.send)

module.exports = router
