var mongoose = require('mongoose')
//Schemea SetUp
var campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    img: String,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

module.exports = mongoose.model("campground", campgroundSchema)