const { delivery } = require('../services')

const tracking = (req, res) => {
  const isSuccess = delivery.onTracking(req.body)
  if (isSuccess) {
    res.send('ok')
  }
}

module.exports = {
  tracking
}
