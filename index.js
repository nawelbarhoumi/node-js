const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3000;

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

//use routing
app.use('/api/v1', todoAPI);
app.use('/api/v1', userAPI);
app.use('/api/v1', userDetailsAPI);
app.use('/api/v1', tutorialAPI);
app.use('./api/v1', tagAPI);






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});