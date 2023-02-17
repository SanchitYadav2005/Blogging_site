const express = require("express");
const router = express.Router();
const users = require('../controllers/userControls');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.route('/')
      .get(users.homePage)

router.route('/createAccount')
     .get(users.createAccount)
     .post(upload.single('image'), (req,res)=>{
            console.log(req.body,req.file);
            res.send("It worked");
     })

router.get('/:id/profile', users.showProfile)

module.exports = router;