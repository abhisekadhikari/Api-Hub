const mongoose = require("mongoose")

const courseEnrollSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
			minlength: [2, "Name must be at least 2 characters long"],
			trim: true,
		},

		email: {
			type: String,
			required: true,
			trim: true,
			match: [/\S+@\S+\.\S+/, "Email is invalid."],
		},

		phone: {
			type: Number,
			required: [true, "Phone number is required."],
			validate: {
				validator: function (value) {
					return value.toString().length === 10
				},
				message: "Mobile number must be exactly 10 digits",
			},
		},

		course: [
			{
				type: String,
				required: [true, "At least one course should be selected."],
				trim: true,
				lowercase: true,
			},
		],

		college: {
			type: String,
			optional: true,
		},
	},
	{
		timestamps: true,
	},
)

courseEnrollSchema.indexes({ email: 1, phone: 1 }, { unique: true })

const Enroll = mongoose.model("enroll", courseEnrollSchema)

module.exports = { Enroll }
