import { Router } from 'express';

import { createOrderController } from '../controllers/orders.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { orderValidationSchema } from '../validation/order.js';
const router = Router();

router.post(
  '/',
  validateBody(orderValidationSchema),
  ctrlWrapper(createOrderController),
);

export default router;
