const { delivery } = require('../services')

const send = async (req, res) => {
  const { to, subject, secret, html } = req.body

  if (secret != process.env.SECRET) return res.status(400).json('bad request')

  const response = await delivery.send({ to, subject, html })
  res.json(response)
}

module.exports = {
  send
}
