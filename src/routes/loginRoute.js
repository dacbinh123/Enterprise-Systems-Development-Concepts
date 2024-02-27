const express = require('express');
const router = express.Router();
const { getLogin, check } = require('../controllers/loginController');

router.post('/', check); 
router.get('/', getLogin);

module.exports = router;
