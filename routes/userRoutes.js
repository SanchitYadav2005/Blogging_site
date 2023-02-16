const express = require("express");
const router = express.Router();
const users = require('../controllers/userControls');

router.get('/', users.homePage);

router.get('/createAccount', users.createAccount)
      .post('/createAccount', users.uploadAccount);

router.get('/:id/profile', users.showProfile);

module.exports = router;