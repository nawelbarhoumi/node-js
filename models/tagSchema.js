const mongoose = require('mongoose');
const tagSchema = mongoose.Schema({
    title: String,
    description: String,
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('tag', tagSchema);