const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3000;
//firstway(dotenv file config)
const dotenv = require('dotenv');
dotenv.config();
//second way (dotenv file config)
//require('dotenv').config()



//pasport
const passport = require('./passport/passport');


const app = express();
// cors config
app.unsubscribe(cors())

// morgan
app.use(morgan('dev'));

// body-parser config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', async(req, res) => {
  res.json({message:'bonjour les amis!'});
});


//import connection to database
const connect = require('./database/connect');

//import routing
const todoAPI = require('./routes/todoAPI');
const userAPI = require('./routes/userAPI');
const userDetailsAPI = require('./routes/userDetailsAPI');
const tutorialAPI = require('./routes/tutorialAPI');
const tagAPI = require('./routes/tagAPI');
const mailAPI = require('./routes/mailAPI');
const uploadAPI = require('./routes/uploadAPI');
const authAPI = require('./routes/authAPI');
//require schedule
const schedule = require('./schedule');

//use routing
app.use('/api/v1', todoAPI);
app.use('/api/v1', userAPI);
app.use('/api/v1', userDetailsAPI);
app.use('/api/v1', tutorialAPI);
app.use('/api/v1', tagAPI);
app.use('/api/v1', mailAPI);
app.use('/api/v1', uploadAPI);
app.use('/api/v1', authAPI);






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});