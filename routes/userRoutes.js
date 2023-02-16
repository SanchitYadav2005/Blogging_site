const express = require("express");
const router = express.Router();
const users = require('../controllers/userControls');

router.route('/')
      .get(users.homePage)

router.route('/createAccount')
     .get(users.createAccount)
     .post(users.uploadAccount)

router.get('/:id/profile', users.showProfile)

module.exports = router;