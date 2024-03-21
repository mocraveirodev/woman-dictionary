import { Router } from 'express';
import WomanController from '../controllers/WomanController.js';

const router = Router();

router.get('/', WomanController.getWoman);

export default router;