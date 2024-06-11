require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// modules import

const { mainRoutes } = require('./routes/main.routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes

app.use('/api', mainRoutes)

module.exports = { app }
