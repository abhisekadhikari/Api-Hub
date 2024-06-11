const { app } = require('./app')
const connectDatabase = require('./utils/db')

connectDatabase()
	.then(() => {
		app.on('error', () => {
			process.exit(1)
		})

		app.listen(process.env.PORT || 3000, () => {
			console.log('Server Started')
		})
	})
	.catch((err) => {
		console.error('Server Error ' + err)
		process.exit(1)
	})
