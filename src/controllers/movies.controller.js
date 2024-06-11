const { AsyncErrorHandler } = require("../utils/AsyncErrorHandler")
const { Movie } = require("../models/movie.model")
const { default: mongoose } = require("mongoose")

const getAllMovies = AsyncErrorHandler(async (req, res) => {
	const movies = await Movie.find()

	if (movies === null || movies.length < 0)
		return res.status(404).json({
			message: "No movies found.",
			success: false,
		})

	res.status(200).json(movies)
})

const getMovieById = AsyncErrorHandler(async (req, res) => {
	const id = req.query.movie_id

	const isMovieIdValid = mongoose.isValidObjectId(id)

	if (!isMovieIdValid)
		return res.status(400).json({
			message: "Invalid movie movie ID.",
			success: false,
		})

	const movie = await Movie.findById(id)

	if (movie === null) {
		return res.status(404).json({
			message: "No Movie not with this id.",
			success: false,
		})
	}

	res.status(200).json(movie)
})

module.exports = {
	getAllMovies,
	getMovieById,
}
