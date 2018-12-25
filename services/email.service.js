const apiKey = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN

const mailgun = require('mailgun-js')({ apiKey, domain })

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

module.exports = {
  sendOne
}
