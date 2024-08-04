require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// modules import

const { mainRoutes } = require("./routes/main.routes")
const { AsyncErrorHandler } = require("./utils/AsyncErrorHandler")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes

app.use("/api", mainRoutes)

app.use((err, req, res, next) => {
	res.status(400).json({ success: false, error: err.message })
})

module.exports = { app }
