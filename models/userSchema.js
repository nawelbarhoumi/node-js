const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    photo: String,
    todos: [{type: mongoose.Schema.Types.ObjectId, ref:'todo'}],
    userDetails: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    tutorials: [{type: mongoose.Schema.Types.ObjectId, ref: 'tutorial'}]
},
    {
        versionKey: false,
        timestamps: true
    });


module.exports = mongoose.model('user', userSchema);