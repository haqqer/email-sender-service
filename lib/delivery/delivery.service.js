const mailgun = require('../../plugins/mailgun')
const Delivery = require('./delivery.model')

async function send ({ to, subject, html }) {
  to = to.replace(/\s+/g, '') // remove every space
  to = to.replace(/,\s*$/, '') // remove last coma and space if there trailing
  to = to.split(',') // finally make it as an array of address

  const mails = to.map(mail => {
    return {
      from: process.env.MAILGUN_EMAIL_SENDER,
      to: mail,
      subject,
      html
    }
  })
  let result
  try {
    for (const mail of mails) {
      console.log(mail)
      const response = await mailgun.messages().send(mail)
      console.log('>>> mengirim...\n', response)
      result = { email: mail.to, sentId: response.id, status: 'sent' }
    }
    const saved = await Delivery.create(result)
    // console.log(result)
    return saved
  } catch (error) {
    console.log('xxx error \n', error)
    return error
  }
}

module.exports = {
  send
}
