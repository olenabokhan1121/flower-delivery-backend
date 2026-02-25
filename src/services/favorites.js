import { FavoriteCollection } from '../db/models/favorites.js';
import createHttpError from 'http-errors';
export const addToFavorites = async (clientId, flowerId) => {
  if (!clientId) {
    throw createHttpError(400, 'ClientId is required');
  }
  const user = await FavoriteCollection.findOneAndUpdate(
    { clientId },
    { $addToSet: { favoriteFlowers: flowerId } },
    { new: true, upsert: true },
  );
  return user;
};

export const removeFromFavorites = async (clientId, flowerId) => {
  if (!clientId) {
    throw createHttpError(400, 'ClientId is required');
  }
  const user = await FavoriteCollection.findOneAndUpdate(
    { clientId },
    { $pull: { favoriteFlowers: flowerId } },
    { new: true },
  );
  if (!user) {
    throw createHttpError(404, 'Flower not found');
  }
  return user;
};
