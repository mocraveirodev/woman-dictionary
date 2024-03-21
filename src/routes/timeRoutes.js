import { Router } from 'express';
import TimeController from '../controllers/TimeController.js';

const router = Router();

router.get('/', TimeController.getTime);

export default router;