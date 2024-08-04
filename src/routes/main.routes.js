const { movieRoute } = require("./movies.routes")
const { wagRoute } = require("./waglogy.routes")

const mainRoutes = require("express").Router()

mainRoutes.use("/movies", movieRoute)

mainRoutes.use("/enroll", wagRoute)

module.exports = {
	mainRoutes,
}
