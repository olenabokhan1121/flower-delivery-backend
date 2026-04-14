import { createOrder } from '../services/orders.js';

export const createOrderController = async (req, res) => {
  //const orderData = req.body;
  const { items, totalPrice, customer } = req.body;
  const { clientId } = req;
  if (!items || items.length === 0) {
    return res.status(400).json({
      message: 'Items are required',
    });
  }
  const order = await createOrder({
    items,
    totalPrice,
    customer: { ...customer, clientId },
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully create an order!',
    data: order,
  });
};
