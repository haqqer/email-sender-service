const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  signature: {},
  data: {}
}, {
    timestamps: true
  });

module.exports = mongoose.model('Tracking', trackingSchema);
