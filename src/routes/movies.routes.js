const {
	getAllMovies,
	getMovieById,
} = require("../controllers/movies.controller")

const movieRoute = require("express").Router()

movieRoute.route("/").get(getAllMovies)

movieRoute.route("/search").get(getMovieById)

module.exports = {
	movieRoute,
}
