var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', new mongoose.Schema({
    id: Number,
    userId: Number,
    videoId: Number,
    text: Number
}))
