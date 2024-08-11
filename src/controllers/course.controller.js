const { Enroll } = require("../models/enroll.model")
const { AsyncErrorHandler } = require("../utils/AsyncErrorHandler")

const enrollCourse = AsyncErrorHandler(async (req, res) => {
	const { name, phone, email, courses, college } = req.body

	const isUserEnrollmentRecordExists = await Enroll.findOne({
		$or: [{ email }, { phone }],
	})

	if (isUserEnrollmentRecordExists) {
		return res.status(400).json({
			success: false,
			message: "User already enrolled in this course",
		})
	}

	await Enroll.create({
		name,
		phone,
		courses,
		email,
		college,
	})

	res.status(201).json({
		success: true,
		message: "We will contact you soon",
	})
})

module.exports = { enrollCourse }
