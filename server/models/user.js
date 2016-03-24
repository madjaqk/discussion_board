// Model

var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema(
	{
		name: { 
			type: String, 
			required: true,
			unique: true 
		},
		topic_count: {
			type: Number,
			default: 0
		},
		post_count: {
			type: Number,
			default: 0
		},
		comment_count: {
			type: Number,
			default: 0
		}
	},
	{ timestamps: true} // This line is options for the schema, not fields
)

mongoose.model("User", UserSchema)