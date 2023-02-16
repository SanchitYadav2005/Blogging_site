const express = require("express");
const router = express.Router();
const users = require('../controllers/userControls');

router.get('/', users.homePage);

module.exports = router;