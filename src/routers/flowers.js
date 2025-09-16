import { Router } from 'express';

import {
  getShopsFlowersController,
  getAllFlowersController,
} from '../controllers/flowers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllFlowersController));

router.get('/:shopId', isValidId, ctrlWrapper(getShopsFlowersController));

export default router;
