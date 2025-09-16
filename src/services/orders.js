import { OrderCollection } from '../db/models/order.js';

export const createOrder = async (payload) => {
  const order = await OrderCollection.create(payload);
  return order;
};
