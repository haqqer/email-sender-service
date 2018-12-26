const Tracking = require('../models/Tracking')
const { objectKeysToCamelCase } = require('../utils')

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
