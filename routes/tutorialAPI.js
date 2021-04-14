const express = require('express');
const router = express.Router();

//require tutorial schema
const tutorial = require('../models/tutorialSchema')

// 1. get all tutorials
router.get('/tutorial', async(req, res) => {
    const tutorials = await tutorial.find().populate('tags');
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


   //affect many to many
   router.put('/tutorials/affectTutorials/:idTuto/:idTag', async(req, res)=>{
    const updateTutorial = await tutorial.findByIdAndUpdate(req.params.idTutorial,{$push: {tags: req.params.idTag}},{new: true});
    res.json({message:'Tag affected successfully.'})
});

// desaffect many to many
router.put('/tutorials/desaffectTutorials/:idTuto/:idTag', async(req, res)=>{
  const updateTutorial = await tutorial.findByIdAndUpdate(req.params.idTutorial,{$pull: {tags: req.params.idTag}},{new: true});
  res.json({message:'Tag desaffected successfully.'})
});



module.exports = router;