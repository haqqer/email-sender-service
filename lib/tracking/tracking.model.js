const mongoose = require('mongoose')

const trackingSchema = new mongoose.Schema({
  data: {}
}, {
  timestamps: true
})

module.exports = mongoose.model('Tracking', trackingSchema)
