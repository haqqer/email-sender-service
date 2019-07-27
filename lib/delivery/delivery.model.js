const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema({
  email: String,
  sentId: String,
  status: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Delivery', deliverySchema)
