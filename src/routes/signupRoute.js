const express = require('express');
const router = express.Router();
const {  checkSignup,    getSignupController } = require('../controllers/signupController');

router.post("/", checkSignup);

router.get('/', getSignupController);

module.exports = router;
