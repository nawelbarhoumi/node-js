const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('todo', todoSchema);