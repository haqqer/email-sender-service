const { email } = require('../services')

const delivered = (req, res) => {
  const isSuccess = email.onDelivered(req.body)
  if (isSuccess) {
    res.send('ok')
  }
}

module.exports = {
  delivered
}
