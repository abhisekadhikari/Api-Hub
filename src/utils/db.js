const mongoose = require("mongoose")

const connectDatabase = async () => {
	try {
		const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
		console.log("Database Connected")
		console.log("Database Host: ", connectionInstance.connection.host)
	} catch (error) {
		console.error("Database Connection Error.", error)
	}
}

module.exports = connectDatabase
