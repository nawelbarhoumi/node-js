const express = require('express');
const router = express.Router();
const passport = require('passport');

//require userDetails schema
const UserDetails = require('../models/UserDetailsSchema')

// 1. get all UserDetails
router.get('/userDetails', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const todos = await UserDetails.find();
    res.json(userDetails);
  });

//2. get userDetails by id
  router.get('/userDetails/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const foundUserDetails = await UserDetails.findById(req.params.id);
    res.json(foundUserDetails);
  });
  
  //3.add userDetails

  router.post('/userDetails', passport.authenticate('bearer', { session: false }), async(req, res) => {
      const createdUserDetails = await UserDetails.create(req.body);
    res.json(createdUserDetails);
  });

  //4. update userDetails by id

  router.put('/userDetails/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const updatedUserDetails = await UserDetails.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedUserDetails);
  });

  //5. delete userDetails by id

  router.delete('/userDetails/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const deletedUserDetails = await UserDetails.findByIdAndDelete(req.params.id);
    res.json({message:'userDetails deleted successfully'});
  });



module.exports = router;