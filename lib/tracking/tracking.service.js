const Tracking = require('./tracking.model')
const { objectKeysToCamelCase } = require('../common/utils')

const handleEvent = async (payload) => {
  const data = objectKeysToCamelCase(payload)
  Tracking.create({
    data
  }).then(() => {
    return true
  }).catch(() => {
    return false
  })
}

module.exports = {
  handleEvent
}
