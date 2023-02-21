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
     .post(upload.array('image'), users.uploadAccount);

router.get('/:id/profile', users.showProfile);
router.get('/:id/profile/edit', users.editProfile);

module.exports = router;