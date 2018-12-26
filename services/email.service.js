const mailgun = require('../plugins/mailgun')
const Tracking = require('../models/Tracking')
const { objectKeysToCamelCase } = require('../utils')

const send = async ({ to, subject, html }) => {
  const data = {
    from: process.env.MAILGUN_EMAIL_SENDER,
    to,
    subject,
    html
  };

  try {
    const response = await mailgun.messages().send(data);
    console.log('berhasil', response)
    return response
  } catch (error) {
    console.log('xxx error \n', error)
    return error
  }
}

const onTracking = async (payload) => {
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
  send,
  onTracking
}
