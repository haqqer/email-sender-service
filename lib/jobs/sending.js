const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = function (agenda) {
  agenda.define('fls registration', (job, done) => {
    let data = job.attrs.data
    console.log('mulai email fls register', data.email);
    const mailOptions = {
      from: process.env.MAILGUN_EMAIL_SENDER,
      to: data.email,
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: '<b>Hello world?</b>'
    };

    nodemailerMailgun.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('[Failed send email]', error);
        done(error);
      } else {
        console.log('>> Email sent:', info);
        done()
      }
    });
  });

  // agenda.define('reset password', (job, done) => {
  //   // Etc
  // });

  // More email related jobs
};
