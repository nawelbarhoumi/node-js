const express = require('express');
const router = express.Router();
const passport = require('passport')
//require tag schema
const Tag = require('../models/tagSchema')

// 1. get all tags
router.get('/tag', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const tags = await Tag.find().populate('tutorials');
    res.json(tags);
  });

//2. get tag by id
  router.get('/tag/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const foundTag = await Tag.findById(req.params.id);
    res.json(foundTag);
  });
  
  //3.add tag

  router.post('/tag', passport.authenticate('bearer', { session: false }), async(req, res) => {
      const createdTag = await Tag.create(req.body);
    res.json(createdTag);
  });

  //4. update tag by id

  router.put('/tag/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedTag);
  });

  //5. delete tutorial by id

  router.delete('/tag/:id', passport.authenticate('bearer', { session: false }), async(req, res) => {
    const deletedTag = await Tag.findByIdAndDelete(req.params.id);
    res.json({message:'tag deleted successfully'});
  });

  //affect many to many
  router.put('/tags/affectTutorials/:idTag/:idTuto', passport.authenticate('bearer', { session: false }), async(req, res)=>{
      const updateTag = await Tag.findByIdAndUpdate(req.params.idTag,{$push: {tutorials: req.params.idTuto}},{new: true});
      res.json({message:'Tutorial affected successfully.'})
  });

// desaffect many to many
  router.put('/tags/desaffectTutorials/:idTag/:idTuto', passport.authenticate('bearer', { session: false }), async(req, res)=>{
    const updateTag = await Tag.findByIdAndUpdate(req.params.idTag,{$pull: {tutorials: req.params.idTuto}},{new: true});
    res.json({message:'Tutorial desaffected successfully.'})
});



module.exports = router;