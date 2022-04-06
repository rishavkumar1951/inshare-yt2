require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
	mongoose.connect(process.env.MONGO_CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const connection = mongoose.connection;

	connection
		.once("open", () => {
			console.log("Database connected 🥳🥳🥳🥳");
		})
		.on("error", function (e) {
			console.log("Connection failed ☹️☹️☹️☹️");
		});
}

// mIAY0a6u1ByJsWWZ
module.exports = connectDB;