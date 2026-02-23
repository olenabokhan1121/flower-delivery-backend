import { Router } from 'express';
import {
  addFlowerToFavoritesController,
  deleteFlowerToFavoritesController,
} from '../controllers/flowers.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
const router = Router();
router.post(
  '/:flowerId/favorites',
  isValidId,
  ctrlWrapper(addFlowerToFavoritesController),
);

router.delete(
  '/:flowerId/favorites',
  isValidId,
  ctrlWrapper(deleteFlowerToFavoritesController),
);

export default router;
/*
  // Приклад маршруту для додавання улюблених
  app.post('/favorites', (req, res) => {
    const userId = req.userId;
    const { itemId } = req.body;

    // TODO: Зберігати в базу
    // Наприклад: favorites.push({ userId, itemId });
    console.log(`User ${userId} added favorite: ${itemId}`);

    res.json({ message: 'Added to favorites', userId, itemId });
  });

 */
