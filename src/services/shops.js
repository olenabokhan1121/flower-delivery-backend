import { ShopCollection } from '../db/models/shop.js';
export const getAllShops = async () => {
  const shops = await ShopCollection.find();
  return shops;
};
