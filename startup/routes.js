const delivery = require('../lib/delivery/delivery.route')
const tracking = require('../lib/tracking/tracking.route')
const email_template = require('../lib/tracking/email_template.route')

module.exports = function (app) {
  app.use('/deliveries', delivery)
  app.use('/trackings', tracking)
  app.use('/email_template', email_template)
  app.use('/', function (req, res) {
    res.render('index', { title: 'Halo' })
  })
}
