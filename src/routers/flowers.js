import { Router } from 'express';

import {
  getShopsFlowersController,
  getAllFlowersController,
  addFlowerToFavoritesController,
  deleteFlowerToFavoritesController,
} from '../controllers/flowers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getAllFlowersController));

router.get('/:shopId', isValidId, ctrlWrapper(getShopsFlowersController));
router.post(
  '/:flowerId/favorites',
  ctrlWrapper(addFlowerToFavoritesController),
);

router.delete(
  '/:flowerId/favorites',
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
