const mongoose = require('mongoose');
const tagSchema = mongoose.Schema({
    title: String,
    description: String,
    tutorials: [{type: mongoose.Schema.Types.ObjectId, ref: 'tutorial'}]
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('tag', tagSchema);