const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  signature: {},
  data: {}
}, {
    timestamps: true
  });

module.exports = mongoose.model('DeliveryEvent', deliverySchema);
