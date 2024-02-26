const express = require('express');
const router = express.Router();
const { getIndexController } = require('../controllers/indexController');

// Route GET request to the root URL to getIndexController
router.get('/', getIndexController);

module.exports = router;
