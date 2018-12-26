const { email } = require('../services')

const delivered = (req, res) => {
  const signature = req.body.signature
  const data = req.body['event-data']

  const isSuccess = email.onDelivered(signature, data)
  if (isSuccess) {
    res.send('ok')
  }
}

module.exports = {
  delivered
}
