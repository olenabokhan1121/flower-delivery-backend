import { getAllShops } from '../services/shops.js';

export const getAllShopsController = async (req, res, next) => {
  const shops = await getAllShops();
  res.json(shops);
};
