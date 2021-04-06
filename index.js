const express = require('express');
const app = express();
const port = 3000;

app.get('/', async(req, res) => {
  res.json({message:'bonjour les amis!'});
});

// 1. get all todos
app.get('/todos', async(req, res) => {
    res.json({message:'get all todos'});
  });

//2. get todo by id
  app.get('/todos', async(req, res) => {
    res.json({message:'get todo by id'});
  });
  
  //3.add todo

  app.post('/todos', async(req, res) => {
    res.json({message:'add todo'});
  });

  //4. update todo by id

  app.put('/todos', async(req, res) => {
    res.json({message:'update todo by id'});
  });

  //5. delete todo by id

  app.delete('/todos', async(req, res) => {
    res.json({message:'delete todo by id'});
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});