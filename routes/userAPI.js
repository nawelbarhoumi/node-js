const express = require('express');
const router = express.Router();
const passport = require('passport');

//require user schema
const User = require('../models/userSchema');

// 1. get all users
router.get('/users', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find();
    res.json(users);
  });

  //2. get user by id
  router.get('/users/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const foundUser = await User.findById(req.params.id);
    res.json(foundUser);
  });

   //3.add user

  router.post('/users', passport.authenticate('bearer', { session: false }), async(req, res) => {
      const createdUser = await User.create(req.body);
    res.json(createdUser);
  });

   //4. update user by id

  router.put('/users/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedUser);
  });

    //5. delete user by id

  router.delete('/users/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted successfully'});
  });


  // 1. get all users by age(>25)
router.get('/filter/users/', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find({"age":{$gt:25}});
    res.json(users);
  });

  
  // 1. get all users by age(>=25)
router.get('/filter/users/age', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find({"age":{$gte:25}});
    res.json(users);
  });

    // 1. get all users by age(<25)
router.get('/filter/users/age/less',passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find({"age":{$lt:25}});
    res.json(users);
  });

     // 1. get all users by age(<=25)
router.get('/filter/users/age/lessequal', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find({"age":{$lte:25}});
    res.json(users);
  });

     // 1. get all users by age(<25)
router.get('/filter/users/age/person', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find({$or: [{ age: 25 }, { age: 35 }, { age: 13 }]});
    res.json(users);
  });


router.get('/filter/users/age/name', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const users = await User.find({$and: [{ age: { $lte: 25 } }, { firstName: "mayssa"}]});
    res.json(users);
  });


    //affect one to many
    router.put('/todos/affectTodos/:idTodo/:idUser', passport.authenticate('bearer', { session: false }), async(req, res)=>{
      const updateUser = await User.findByIdAndUpdate(req.params.idUser,{$push: {todos: req.params.idTodo}},{new: true});
      res.json({message:'Todo affected successfully.'})
  });
  
  // desaffect one to many
  router.put('/todos/desaffectTodos/:idTodo/:idUser', passport.authenticate('bearer', { session: false }), async(req, res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.idUser,{$pull: {todos: req.params.idTodo}},{new: true});
    res.json({message:'Todo desaffected successfully.'})
  });
  

     //affect one to one
     router.put('/userDetails/affectUserDetails/:idUserDetails/:idUser', passport.authenticate('bearer', { session: false }), async(req, res)=>{
      const updateUserDetails = await User.findByIdAndUpdate(req.params.idUser,{userDetails: req.params.idUserDetails},{new: true});
      res.json({message:'UserDetail affected successfully.'})
  });
  
  // desaffect one to one
  router.put('/userDetails/desaffectUserDetails/:idUser/:idUserDetails', passport.authenticate('bearer', { session: false }), async(req, res)=>{
    const updateUserDetails = await User.findByIdAndUpdate(req.params.idUser,{userDetails: req.params.idUserDetails},{new: true});
    res.json({message:'userDetail desaffected successfully.'})
  });


    //affect one to many
    router.put('/tutorials/affectTutorials/:idTutorial/:idUser', passport.authenticate('bearer', { session: false }), async(req, res)=>{
      const updateTutorial = await User.findByIdAndUpdate(req.params.idUser,{$push: {tutorials: req.params.idTutorial}},{new: true});
      res.json({message:'tutorial affected successfully.'})
  });
  
  // desaffect one to many
  router.put('/tutorials/desaffectTutorials/:idUser/:idTutorial', passport.authenticate('bearer', { session: false }), async(req, res)=>{
    const updateTutorial = await User.findByIdAndUpdate(req.params.idUser,{$pull: {tutorials: req.params.idTutorial}},{new: true});
    res.json({message:'tutorial desaffected successfully.'})
  });
  

module.exports = router;