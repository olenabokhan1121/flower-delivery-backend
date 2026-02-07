import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routers/index.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { assignUserId } from './middlewares/cookieIdentityMiddleware.js';
dotenv.config();
export default function setupServer() {
  const app = express();
  app.use(express.json());
  app.use(pino({ transport: { target: 'pino-pretty' } }));
  app.use(cors());
  app.use(cookieParser());
  app.use(assignUserId);

  app.use(router);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = Number(getEnvVar('PORT', '3000'));

  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Server is running on port ${PORT}`);
  });
}
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
