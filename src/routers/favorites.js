import { Router } from 'express';
import {
  addFlowerToFavoritesController,
  deleteFlowerToFavoritesController,
} from '../controllers/favorites.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
const router = Router();
router.post(
  '/:flowerId',
  isValidId,
  ctrlWrapper(addFlowerToFavoritesController),
);

router.delete(
  '/:flowerId',
  isValidId,
  ctrlWrapper(deleteFlowerToFavoritesController),
);

export default router;
