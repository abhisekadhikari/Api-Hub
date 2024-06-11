const movieRoute = require("express").Router()

const { Movie } = require("../models/movie.model")
const { AsyncErrorHandler } = require("../utils/AsyncErrorHandler")

movieRoute.post(
	"/insert",
	AsyncErrorHandler(async (req, res) => {
		const movies = req.body
		const response = await Movie.insertMany(movies)
		res.json(response)
	}),
)

module.exports = {
	movieRoute,
}
