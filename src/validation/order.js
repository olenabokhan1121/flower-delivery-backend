import Joi from 'joi';

export const orderValidationSchema = Joi.object({
  shopId: Joi.string().required(),
  items: Joi.array().items(
    Joi.object({
      flowerId: Joi.string().required(),
      name: Joi.string().min(2).max(100).required(),
      quantity: Joi.number().min(1).required(),
    }),
  ),
  totalPrice: Joi.number().min(0).required(),
  customer: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string()
      .pattern(/^\+?\d{10,15}$/)
      .required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
  }),
});
