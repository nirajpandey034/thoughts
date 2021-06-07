const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: String,
        required: "Who are you?"
    },
    mood: {
        type: String,
        required: "Please select your mood"
    },
    text: {
        type: String,
        required: "Please enter ur text"
    }
});

module.exports = Post =  mongoose.model('post', PostSchema);