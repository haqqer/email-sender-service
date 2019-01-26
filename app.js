const express = require('express')
const { startup } = require('./app.config')

require('dotenv').config()

const app = express()

startup.forEach(s => {
  require('./startup/' + s)(app)
})

module.exports = app
