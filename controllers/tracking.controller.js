const { tracking } = require('../services')

const handleEvent = (req, res) => {
  const isSuccess = tracking.handleEvent(req.body)
  if (isSuccess) {
    res.send('ok')
  }
}

module.exports = {
  handleEvent
}
