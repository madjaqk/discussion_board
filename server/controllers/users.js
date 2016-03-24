// Controller

var mongoose = require("mongoose")
var User = mongoose.model("User")

// Rather than the immediate function, it might be better to do this as a constructor function or just an object literal, but that's now how I've done it thus far.
module.exports = (function(){
	return {
		index: function(req, res){
			User.find({}, function(err, results){
				if(err){
					res.json(err)
				} else {
					res.json(results)
				}
			})
		},

		create: function(req, res){
			console.log("user constroller create", req.body)
			var query = {"name": req.body.name}
			req.newData = {}
			req.newData.name = req.body.name
			User.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, results){
				if(err){
					console.log(err)
					res.json(err)
					return
				}
			})
			User.findOne(query, function(err, results){
				if(err){
					console.log(err)
					res.json(err)
					return
				} else {
					console.log("user controller create results", results)
					res.json(results)
				}
			})
		}
	}
})()