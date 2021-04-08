const express = require('express');
const router = express.Router();

//require todo schema
const Todo = require('../models/todoSchema')

// 1. get all todos
router.get('/todos', async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
  });

//2. get todo by id
  router.get('/todos/:id', async(req, res) => {
    const foundTodo = await Todo.findById(req.params.id);
    //second way 
    // const foundTodo = await Todo.findOne({_id: req.params.id});
    res.json(foundTodo);
  });
  
  //3.add todo

  router.post('/todos', async(req, res) => {
      const createdTodo = await Todo.create(req.body);
    res.json(createdTodo);
  });

  //4. update todo by id

  router.put('/todos/:id', async(req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
    //second way
    //const found = await Todo.findById(req.params.id);
    res.json(updatedTodo);
  });

  //5. delete todo by id

  router.delete('/todos/:id', async(req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json({message:'Todo deleted successfully'});
  });



module.exports = router;