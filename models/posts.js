const mongoose = require("mongoose")
const {Schema, model} = mongoose

const postSchema = new Schema ({
    title: {type: String, required: true},
    bodyOfPost: {type: String, required: true},
    authorName: {type: String, required: true},
    date: {type: Date, required: true},
    fandom: {type: Date, required: true}
})

const Post = model('Post', postSchema)

module.exports = Post