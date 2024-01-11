const express = require('express');
const basicController = require('../app/controllers/BasicController.js');

const router = express.Router();

//basicController.index
router.get('/search', basicController.search);
router.get('/', basicController.index);

module.exports = router;
