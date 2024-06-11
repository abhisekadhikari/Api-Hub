const { movieRoute } = require("./movies.routes")

const mainRoutes = require("express").Router()

mainRoutes.use("/movies", movieRoute)

module.exports = {
	mainRoutes,
}
