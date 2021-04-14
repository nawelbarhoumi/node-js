const mongoose = require('mongoose');
const tutorialSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [{type: mongoose.Schema.Types.ObjectId, ref:'tag'}]
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('tutorial', tutorialSchema);