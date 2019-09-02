const mongoose = require('mongoose')

const emailTemplateSchema = new mongoose.Schema({
  email: String,
  sentId: String,
  template: String,
  status: String
}, {
    timestamps: true
  })

module.exports = mongoose.model('Delivery', emailTemplateSchema)
