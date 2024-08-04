const { Enroll } = require("../models/enroll.model")
const { AsyncErrorHandler } = require("../utils/AsyncErrorHandler")

const enrollCourse = AsyncErrorHandler(async (req, res) => {
	const { name, phone, email, course } = req.body

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
		course,
		email,
	})

	res.status(201).json({
		success: true,
		message: "Course Enrollment successful",
	})
})

module.exports = { enrollCourse }
