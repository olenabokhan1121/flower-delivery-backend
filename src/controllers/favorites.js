import { addToFavorites, removeFromFavorites } from '../services/favorites.js';

export const deleteFlowerToFavoritesController = async (req, res) => {
  const { flowerId } = req.params;
  const { clientId } = req;
  const user = await removeFromFavorites(clientId, flowerId);

  res.status(200).json({
    status: 200,
    message: `The flower has been successfully removed from favorites.`,
    data: user,
  });
};

export const addFlowerToFavoritesController = async (req, res) => {
  const { flowerId } = req.params;
  const { clientId } = req;

  const updatedUser = await addToFavorites(clientId, flowerId);
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'Flower added to favorites' });
};
