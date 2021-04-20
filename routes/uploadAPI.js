const express = require ('express');
const router = express.Router();
const multer  = require('multer');
const path = require('path');
const user = require('../models/userSchema');
const passport = require('passport')


//create the storage
const myStorage = multer.diskStorage({
    destination: (req, file, cb)=> {
        const folder = path.resolve('./uploads');
        // console.log(folder);
        cb(null, folder)
    },
    filename: async(req, file, cb) =>{
        const extension = path.extname(file.originalname);
        // console.log(extension);
        const newFileName = Date.now() + extension;
        // console.log(newFileName);

        //update the current user photo
        await user.findByIdAndUpdate(req.params.id, {photo: newFileName},{new: true})
        cb(null, newFileName);
        
    },
});
    //file filter
    
   const fileFilter =(req, file, cb) =>{
    const allowedFileExtension = ['.jpg', '.png', '.jpeg', '.git'];
    const extension = path.extname(file.originalname);
    cb(null, allowedFileExtension.includes(extension))
    //     if(allowedFileExtension.includes(extension))
    //     {
    //         cb(null, true)
    //     }
    //     else{
    //         cb(null, false)
    //     }       
      }


//create the multer middleware
const upload = multer({ storage: myStorage, fileFilter: fileFilter, limits:{fileSize: 1024*1024*20}});

router.post('/uploadImage/:id', [passport.authenticate('bearer', { session: false }),upload.single('img')] ,async(req,res)=>{
    res.json({message: 'image uploaded successfully'});
});

//uploads multiple
router.post('/uploadImageMultiple', [passport.authenticate('bearer', { session: false }),upload.array('img', 3)] ,async(req,res)=>{
    res.json({message: 'image uploaded successfully'});
});

module.exports = router;