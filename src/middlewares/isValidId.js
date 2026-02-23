import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

/*export const isValidId = (req, res, next) => {
  const { shopId } = req.params;
  if (!isValidObjectId(shopId)) {
    return next(createHttpError(400, 'Bad Request'));
  }

  next();
};*/

export const isValidId = (paramName) => {
  return (req, res, next) => {
    const value = req.params[paramName];

    if (!isValidObjectId(value)) {
      return next(createHttpError(400, `Invalid ${paramName}`));
    }

    next();
  };
};
