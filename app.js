const express = require('express')

require('dotenv').config()

const app = express()

require('./start/db')(app)
require('./start/view')(app)
require('./start/middleware')(app)
require('./start/routes')(app)
require('./start/error')(app)

module.exports = app
