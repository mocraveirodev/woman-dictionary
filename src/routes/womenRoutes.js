import { Router } from 'express';
import WomenController from '../controllers/WomenController.js';

const router = Router();

router.get('/', WomenController.getWomen);
router.post('/', WomenController.createWoman);
router.patch('/:id', WomenController.updateWoman);
router.post('/:id', WomenController.deleteWoman);

export default router;