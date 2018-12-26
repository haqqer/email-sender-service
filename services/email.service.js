const mailgun = require('../plugins/mailgun')
const Tracking = require('../models/Tracking')

const sendOne = async ({ to, subject, html }) => {
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

const onTracking = async (signature, data) => {
  Tracking.create({
    signature,
    data
  }).then(() => {
    return true
  }).catch(() => {
    return false
  })
}

module.exports = {
  sendOne,
  onTracking
}
