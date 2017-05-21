var mongoose = require('mongoose');

module.exports = mongoose.model('Video', new mongoose.Schema({
    id: Number,
    userId: Number,
    name: String,
    path: String
}))
