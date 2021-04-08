const express = require('express');
const router = express.Router();

//require user schema
const User = require('../models/userSchema')

// 1. get all users
router.get('/users', async(req, res) => {
    const users = await User.find();
    res.json(users);
  });

  //2. get user by id
  router.get('/users/:id', async(req, res) => {
    const foundUser = await User.findById(req.params.id);
    res.json(foundUser);
  });

   //3.add user

  router.post('/users', async(req, res) => {
      const createdUser = await User.create(req.body);
    res.json(createdUser);
  });

   //4. update user by id

  router.put('/users/:id', async(req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedUser);
  });

    //5. delete user by id

  router.delete('/users/:id', async(req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted successfully'});
  });


  // 1. get all users by age(>25)
router.get('/filter/users/', async(req, res) => {
    const users = await User.find({"age":{$gt:25}});
    res.json(users);
  });

  
  // 1. get all users by age(>=25)
router.get('/filter/users/age', async(req, res) => {
    const users = await User.find({"age":{$gte:25}});
    res.json(users);
  });

    // 1. get all users by age(<25)
router.get('/filter/users/age/less', async(req, res) => {
    const users = await User.find({"age":{$lt:25}});
    res.json(users);
  });

     // 1. get all users by age(<=25)
router.get('/filter/users/age/lessequal', async(req, res) => {
    const users = await User.find({"age":{$lte:25}});
    res.json(users);
  });

     // 1. get all users by age(<25)
router.get('/filter/users/age/person', async(req, res) => {
    const users = await User.find({$or: [{ age: 25 }, { age: 35 }, { age: 13 }]});
    res.json(users);
  });


router.get('/filter/users/age/name', async(req, res) => {
    const users = await User.find({$and: [{ age: { $lte: 25 } }, { firstName: "mayssa"}]});
    res.json(users);
  });



module.exports = router;