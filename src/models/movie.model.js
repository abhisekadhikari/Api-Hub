const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
	rank: { type: Number, required: true },
	title: {
		type: String,
		required: true,
	},
	description: { type: String, required: true },
	image: { type: String, required: true },
	big_image: { type: String, required: true },
	genre: { type: [String], required: true },
	thumbnail: { type: String, required: true },
	rating: { type: String, required: true },
	id: { type: String, required: true },
	year: { type: Number, required: true },
	imdbid: { type: String, required: true },
	imdb_link: { type: String, required: true },
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = {
	Movie,
}
