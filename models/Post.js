const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    //destaque: Boolean,
    //active: Boolean,
    title: String,
    author: String,
    tags: Array,
    //timeToRead: String,
    image: String,
    content: String,

}, { timestamps: true })

module.exports = mongoose.model("Post", PostSchema)