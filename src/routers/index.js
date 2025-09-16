import { Router } from 'express';

import flowersRoutes from './flowers.js';
import shopRouter from './shops.js';
import orderRouter from './order.js';
const router = Router();

router.use('/api/flowers', flowersRoutes);
router.use('/api/shops', shopRouter);
router.use('/api/order', orderRouter);
export default router;
