var mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    id: Number,
    name: String,
    password: String,
    admin: Boolean
}))
