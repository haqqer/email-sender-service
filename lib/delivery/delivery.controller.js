const delivery = require('./delivery.service')

async function send (req, res) {
  const { to, subject, secret, html } = req.body

  if (secret != process.env.SECRET) return res.status(400).json('bad request')

  try {
    const response = await delivery.send({ to, subject, html })
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }

}

module.exports = {
  send
}
