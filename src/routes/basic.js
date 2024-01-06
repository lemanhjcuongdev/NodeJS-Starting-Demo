import express from 'express';
import basicController from '../app/controllers/BasicController.js';

const router = express.Router();

//basicController.index
router.get('/search', basicController.search);
router.get('/', basicController.index);

export default router;
