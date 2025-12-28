import express from 'express';
import { createShort, getShorts, getShort, deleteShort } from '../controllers/shortController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getShorts).post(protect, createShort);
router.route('/:id').get(protect, getShort).delete(protect, deleteShort);

export default router;
