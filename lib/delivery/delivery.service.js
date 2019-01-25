const mailgun = require('../common/plugins/mailgun')

async function send ({ to, subject, html }) {
  to = to.replace(/\s+/g, ''); // remove every space
  to = to.replace(/,\s*$/, ""); // remove last coma and space if there trailing
  to = to.split(',') // finally make it as an array of address

  const mails = to.map(mail => {
    return {
      from: process.env.MAILGUN_EMAIL_SENDER,
      to: mail,
      subject,
      html
    }
  })

  try {
    for (const mail of mails) {
      const response = await mailgun.messages().send(mail);
      console.log('>>> mengirim...\n', response)
    }
    return 'sent'
  } catch (error) {
    console.log('xxx error \n', error)
    return error
  }
}

module.exports = {
  send
}
