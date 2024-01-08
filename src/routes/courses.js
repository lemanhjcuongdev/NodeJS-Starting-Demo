import express from 'express';
import courseController from '../app/controllers/CourseController.js';

const router = express.Router();

//courseController.index
router.get('/:slug', courseController.show);

export default router;
