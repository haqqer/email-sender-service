const delivery = require('../lib/delivery/delivery.route')
const tracking = require('../lib/tracking/tracking.route')
const emailTemplate = require('../lib/tracking/email_template.route')

module.exports = function (app) {
  app.use('/deliveries', delivery)
  app.use('/trackings', tracking)
  app.use('/emailtemplate', emailTemplate)
  app.use('/', function (req, res) {
    res.render('index', { title: 'Halo' })
  })
}
