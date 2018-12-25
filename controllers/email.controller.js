const { email } = require('../services')

const sendOne = (req, res) => {
  const response = email.sendOne()
  res.json(response)
}

module.exports = {
  sendOne
}
