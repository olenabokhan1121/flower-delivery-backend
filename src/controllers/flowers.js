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
    ...flower,
  }));

  res.status(200).json({
    status: 200,
    message: 'Successfully found flowers!',
    data: { enrichedFlowers, ...paginationData },
  });
};
