const Tracking = require('./tracking.model')
const { objectKeysToCamelCase } = require('../common/utils')

async function handleEvent (payload) {
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
