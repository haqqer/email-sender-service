let mongoose = require('mongoose')

module.exports = function () {
  let mongoUrl = process.env.MONGO_STRING || 'mongodb://localhost:27017/emailService'
  mongoose.Promise = global.Promise
  mongoose.connect(mongoUrl, { useNewUrlParser: true }, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('mongo connected', mongoUrl)
    }
  })
}
