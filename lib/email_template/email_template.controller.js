const emailTemplate = require('./emailTemplate.service')

async function send (req, res) {
  const { to, subject, secret, template, variables } = req.body

  if (secret !== process.env.SECRET) return res.status(400).json('bad request')

  try {
    const response = await emailTemplate.send({ to, subject, template, variables })
    console.log(response)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  send
}
