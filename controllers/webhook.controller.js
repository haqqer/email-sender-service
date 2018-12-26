const { email } = require('../services')

const tracking = (req, res) => {
  const isSuccess = email.onTracking(req.body)
  if (isSuccess) {
    res.send('ok')
  }
}

module.exports = {
  tracking
}
