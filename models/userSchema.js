const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
});

module.exports = mongoose.model('user', userSchema);