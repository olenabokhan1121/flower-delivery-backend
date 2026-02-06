import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routers/index.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
export default function setupServer() {
  const app = express();
  app.use(express.json());
  app.use(pino({ transport: { target: 'pino-pretty' } }));
  app.use(cors());
  app.use(cookieParser());

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
/*import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import router from './routers/index.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

export default function startServer() {
  const app = express();

  // =====================
  // MIDDLEWARE
  // =====================
  app.use(express.json());
  app.use(cookieParser());
  app.use(pino({ transport: { target: 'pino-pretty' } }));
  app.use(cors());

  // =====================
  // Middleware для анонімного користувача
  // =====================
  app.use((req, res, next) => {
    if (!req.cookies.userId) {
      const userId = uuidv4();
      res.cookie('userId', userId, {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 рік
        httpOnly: true,
      });
      req.userId = userId;
    } else {
      req.userId = req.cookies.userId;
    }
    next();
  });

  // =====================
  // ROUTES
  // =====================
  // Приклад маршруту для додавання улюблених
  app.post('/favorites', (req, res) => {
    const userId = req.userId;
    const { itemId } = req.body;

    // TODO: Зберігати в базу
    // Наприклад: favorites.push({ userId, itemId });
    console.log(`User ${userId} added favorite: ${itemId}`);

    res.json({ message: 'Added to favorites', userId, itemId });
  });

  // Підключаємо інші маршрути
  app.use(router);

  // =====================
  // Обробка помилок
  // =====================
  app.use(notFoundHandler);
  app.use(errorHandler);

  // =====================
  // Запуск сервера
  // =====================
  const PORT = Number(getEnvVar('PORT', '3000'));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
*/
