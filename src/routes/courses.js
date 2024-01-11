const express = require('express');
const courseController = require('../app/controllers/CourseController.js');

const router = express.Router();

//courseController.index
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
