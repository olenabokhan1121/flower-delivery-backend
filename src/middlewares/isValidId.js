import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (paramName) => {
  return (req, res, next) => {
    const value = req.params[paramName];

    if (!isValidObjectId(value)) {
      return next(createHttpError(400, `Invalid ${paramName}`));
    }

    next();
  };
};
