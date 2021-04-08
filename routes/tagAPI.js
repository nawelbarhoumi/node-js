const express = require('express');
const router = express.Router();

//require tag schema
const Tag = require('../models/tagSchema')

// 1. get all tags
router.get('/tag', async(req, res) => {
    const tags = await Tag.find();
    res.json(tags);
  });

//2. get tag by id
  router.get('/tag/:id', async(req, res) => {
    const foundTag = await Tag.findById(req.params.id);
    res.json(foundTag);
  });
  
  //3.add tag

  router.post('/tag', async(req, res) => {
      const createdTag = await Tag.create(req.body);
    res.json(createdTag);
  });

  //4. update tag by id

  router.put('/tag/:id', async(req, res) => {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedTag);
  });

  //5. delete tutorial by id

  router.delete('/tag/:id', async(req, res) => {
    const deletedTag = await Tag.findByIdAndDelete(req.params.id);
    res.json({message:'tag deleted successfully'});
  });



module.exports = router;