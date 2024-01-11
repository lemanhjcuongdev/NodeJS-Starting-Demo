const express = require('express');
const newsController = require('../app/controllers/NewsController.js');

const router = express.Router();

//newsController.index
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
