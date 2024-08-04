const { enrollCourse } = require("../controllers/course.controller")

const wagRoute = require("express").Router()

wagRoute.route("/").post(enrollCourse)

module.exports = { wagRoute }
