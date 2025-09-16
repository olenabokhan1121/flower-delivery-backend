import { Router } from 'express';
import { getAllShopsController } from '../controllers/shops.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllShopsController));

export default router;
