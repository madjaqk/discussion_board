var users = require("./../controllers/users.js")

module.exports = function(app){
	app.get("/url/path/tk", users.index) // No apostrophes after lines
	app.post("/users/create", users.create)
}