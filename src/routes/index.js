import { Router } from 'express';
import womenRoutes from './womenRoutes.js';
import helloWorldRoutes from './helloWorldRoutes.js';
import timeRoutes from './timeRoutes.js';
import womanRoutes from './womanRoutes.js';

const router = Router();

router.use('/women', womenRoutes);
router.use('/hello', helloWorldRoutes);
router.use('/time', timeRoutes);
router.use('/woman', womanRoutes);


export default router;