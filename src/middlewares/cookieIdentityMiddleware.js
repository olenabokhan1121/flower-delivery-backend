import { ONE_YEAR } from '../constants/index.js';
import { v4 as uuidv4 } from 'uuid';

export const assignUserId = (req, res, next) => {
  // Якщо користувач вже має userId, нічого робити не потрібно
  if (req.cookies.userId) {
    req.userId = req.cookies.userId;
    return next();
  }
  // Якщо userId немає, перевіряємо guestId
  if (!req.cookies.guestId) {
    const guestId = uuidv4();
    res.cookie('guestId', guestId, {
      expires: ONE_YEAR,
      httpOnly: true,
    });
    req.guestId = guestId;
  } else {
    req.guestId = req.cookies.guestId;
  }
  next();
};
