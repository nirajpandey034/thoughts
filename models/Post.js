const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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