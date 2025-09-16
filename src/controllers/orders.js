import { createOrder } from '../services/orders.js';

export const createOrderController = async (req, res) => {
  const { shopId } = req.body;

  const orderData = { ...req.body, shopId: shopId };
  const order = await createOrder(orderData);

  res.status(201).json({
    status: 201,
    message: 'Successfully create an order!',
    data: order,
  });
};
