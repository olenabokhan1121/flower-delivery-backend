import { getShopsFlowers, getAllFlowers } from '../services/flowers.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getShopsFlowersController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const { shopId } = req.params;
  const { clientId } = req.cookies;
  const shopFlower = await getShopsFlowers({
    page,
    perPage,
    sortBy,
    sortOrder,
    id: shopId,
    clientId,
  });

  res.status(200).json({
    status: 200,
    message: `Flowers from the shop have been successfully found!`,
    data: shopFlower,
  });
};

export const getAllFlowersController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const { clientId } = req.cookies;
  const { flowers, ...paginationData } = await getAllFlowers({
    page,
    perPage,
    sortBy,
    sortOrder,
    clientId,
  });

  const enrichedFlowers = flowers.map((flower) => ({
    ...flower.toObject(),
  }));

  res.status(200).json({
    status: 200,
    message: 'Successfully found flowers!',
    data: { enrichedFlowers, ...paginationData },
  });
};
/*import mongoose from 'mongoose';


export const getAllFlowers = async ({
  page,
  perPage,
  sortBy,
  sortOrder,
  clientId,
}) => {
  const skip = (page - 1) * perPage;

  let favoriteObjectIds = [];

  if (clientId) {
    const favorites = await FavoriteCollection.findOne({ clientId });

    if (favorites?.favoriteFlowers?.length) {
      favoriteObjectIds = favorites.favoriteFlowers.map(
        (id) => new mongoose.Types.ObjectId(id),
      );
    }
  }

  const flowers = await FlowerCollection.aggregate([
    {
      $addFields: {
        isFavorite: {
          $in: ['$_id', favoriteObjectIds],
        },
      },
    },
    {
      $sort: {
        isFavorite: -1,
        [sortBy]: sortOrder === 'asc' ? 1 : -1,
      },
    },
    { $skip: skip },
    { $limit: perPage },
  ]);

  return flowers;
};*/
