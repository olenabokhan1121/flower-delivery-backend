import { Router } from 'express';

import { createOrderController } from '../controllers/orders.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post('/', ctrlWrapper(createOrderController));

export default router;
