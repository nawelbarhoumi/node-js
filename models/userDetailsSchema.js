const mongoose = require('mongoose');
const UserDetailsSchema = mongoose.Schema({
    adress: String,
    zipCode: String,
    city: String,
    
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('userDetails', UserDetailsSchema);