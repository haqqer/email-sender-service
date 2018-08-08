const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
var verifier = require('email-verify');
const EmailTemplate = require('email-templates-v2').EmailTemplate
const path = require('path')

function getRoomImageUrl(room) {
  switch (room) {
    case 'Education':
      return 'https://user-images.githubusercontent.com/21119252/41973205-85ec42bc-7a3e-11e8-9a29-e3f296080e21.png'
    case 'Digital':
      return 'https://user-images.githubusercontent.com/21119252/41973182-71436b92-7a3e-11e8-9d7e-8f039c0e67e3.png'
    case 'Poverty':
      return 'https://user-images.githubusercontent.com/21119252/41973269-aa219768-7a3e-11e8-8e77-6023aef4d135.png'
    case 'Human Capital':
      return 'https://user-images.githubusercontent.com/21119252/41973250-a087b4e4-7a3e-11e8-845b-ec4c8c38d34f.png'
    case 'Entrepreneurship':
      return 'https://user-images.githubusercontent.com/21119252/41973233-91527996-7a3e-11e8-9b1c-34e2b8ee0118.png'
    case 'Urban Planning':
      return 'https://user-images.githubusercontent.com/21119252/41973340-e2cc96bc-7a3e-11e8-8a25-a079c0b6e279.png'
    default:
      return 'https://user-images.githubusercontent.com/21119252/41821836-c2787e10-7810-11e8-8d2a-cc829bea4ae3.png'
  }
}

function emailVerify (email, isNeedVerify) {
  return new Promise((resolve, reject) => {
    if (!isNeedVerify) {
      console.log('not need verify email');
      resolve({ err: false, info: {success: true} })
    } else {
      console.log('verify email');
      verifier.verify(email, function (err, info) {
        resolve({ err: err, info: info })
      })
    }
  })
}

function isNotYahoo (email) {
  // sementara ini library yang dipake kalo verify yahoo hasilnya invalid terus
  const listYahoo = ['yahoo.com', 'yahoo.co.id', 'rocketmail.com', 'ymail.com']
  let suffix = email.split('@')[1]
  return listYahoo.indexOf(suffix) < 0
}

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

    emailVerify(data.email, isNotYahoo(data.email)).then(({ err, info }) => {
      if (err) {
        console.log('[err verify email]', err);
        done(err)
      } else {
        if (info.success) {
          console.log('[email verified]', data.email);
          let templateDir = path.join(__dirname, '..', 'templateEmail', 'register-fls')
          let invoice = new EmailTemplate(templateDir)
          let invoiceVar = {
            fullname: data.fullname,
            email: data.email,
            room: data.roomFirst,
            roomImage: getRoomImageUrl(data.roomFirst)
          }

          invoice.render(invoiceVar, function (err, result) {
            if (!err) {
              const mailOptions = {
                from: process.env.MAILGUN_EMAIL_SENDER,
                to: data.email,
                subject: 'Terima Kasih, ' + data.nickname,
                html: result.html
              };
              console.log('mengirim email...', data.email);

              nodemailerMailgun.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log('[error send email]', error);
                  done(error);
                } else {
                  console.log('>> Email sent:', info);
                  done()
                }
              });
            } else {
              console.log('[error render email]', job.attrs.data.email, err);
              done(err)
            }
          })
        } else {
          console.log('[email verify not success]', info.info);
          done(info.info)
        }
      }
    })
  });

  agenda.define('announcement rejected', (job, done) => {
    let data = job.attrs.data
    console.log('mulai email announcement rejected', data.email);

    emailVerify(data.email, isNotYahoo(data.email)).then(({ err, info }) => {
      if (err) {
        console.log('[err verify email]', err);
        done(err)
      } else {
        if (info.success) {
          console.log('[email verified]', data.email);
          let templateDir = path.join(__dirname, '..', 'templateEmail', 'announcement-rejected')
          let invoice = new EmailTemplate(templateDir)
          let invoiceVar = {
            fullname: data.fullname,
            email: data.email,
            room: data.roomFirst,
            roomImage: getRoomImageUrl(data.roomFirst)
          }

          invoice.render(invoiceVar, function (err, result) {
            if (!err) {
              const mailOptions = {
                from: process.env.MAILGUN_EMAIL_SENDER,
                to: data.email,
                subject: 'Hai, ' + data.nickname + '. Announcement of Future Leader Summit 2018',
                html: result.html
              };
              console.log('mengirim email rejection ...', data.email);

              nodemailerMailgun.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log('[error send email]', error);
                  done(error);
                } else {
                  console.log('>> Email sent:', info);
                  done()
                }
              });
            } else {
              console.log('[error render email]', job.attrs.data.email, err);
              done(err)
            }
          })
        } else {
          console.log('[email verify not success]', info.info);
          done(info.info)
        }
      }
    })
  });

  // More email related jobs
};
