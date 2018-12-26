const mailgun = require('../plugins/mailgun')

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

const onDelivered = async () => {
  return true
}

module.exports = {
  sendOne,
  onDelivered
}
