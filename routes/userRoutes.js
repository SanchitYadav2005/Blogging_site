const express = require("express");
const router = express.Router();
const users = require('../controllers/userControls');
const {storage} = require('../cloudinary/index');
const multer  = require('multer');
const upload = multer({storage})

router.route('/')
      .get(users.homePage)

router.route('/createAccount')
     .get(users.createAccount)
     .post(users.uploadAccount, upload.single('image'));

router.get('/:id/profile', users.showProfile)

module.exports = router;