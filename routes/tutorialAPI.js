const express = require('express');
const router = express.Router();

//require tutorial schema
const tutorial = require('../models/tutorialSchema')

// 1. get all tutorials
router.get('/tutorial', async(req, res) => {
    const tutorials = await tutorial.find();
    res.json(tutorials);
  });

//2. get tutorial by id
  router.get('/tutorial/:id', async(req, res) => {
    const foundTutorial = await tutorial.findById(req.params.id);
    res.json(foundTutorial);
  });
  
  //3.add tutorial

  router.post('/tutorial', async(req, res) => {
      const createdTutorial = await tutorial.create(req.body);
    res.json(createdTutorial);
  });

  //4. update tutorial by id

  router.put('/tutorial/:id', async(req, res) => {
    const updatedTutorial = await tutorial.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedTutorial);
  });

  //5. delete tutorial by id

  router.delete('/tutorial/:id', async(req, res) => {
    const deletedTutorial = await tutorial.findByIdAndDelete(req.params.id);
    res.json({message:'tutorial deleted successfully'});
  });



module.exports = router;