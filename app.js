const express = require('express')

require('dotenv').config()

const app = express()

/*
  register here from directory ./start
  place in order. first order will first execute
*/
const starts = [
  'db',
  'view',
  'middleware',
  'routes',
  'error'
]
starts.forEach(s => {
  require('./start/' + s)(app)
})

module.exports = app
