import { ONE_YEAR } from '../constants/index.js';
import { v4 as uuidv4 } from 'uuid';

export const assignUserId = (req, res, next) => {
  if (req.cookies.clientId) {
    req.clientId = req.cookies.clientId;
    return next();
  }
  const id = uuidv4();
  res.cookie('clientId', id, {
    maxAge: ONE_YEAR,
    httpOnly: true,
    //sameSite: 'none',
    //secure: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  req.clientId = id;

  next();
};
