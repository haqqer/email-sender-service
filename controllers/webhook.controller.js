const { email } = require('../services')

const tracking = (req, res) => {
  const signature = req.body.signature
  const data = req.body['event-data']

  const isSuccess = email.onTracking(signature, data)
  if (isSuccess) {
    res.send('ok')
  }
}

module.exports = {
  tracking
}
