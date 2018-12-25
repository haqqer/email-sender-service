const { email } = require('../services')

const sendOne = async (req, res) => {
  const { to, subject, secret, html } = req.body

  const response = await email.sendOne({ to, subject, html })
  res.json(response)
}

module.exports = {
  sendOne
}
