const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/database001', options)
.then(success=>{
    console.log("successfully connected to database");
}).catch(error=>{
    console.log("error in connection to database");
})