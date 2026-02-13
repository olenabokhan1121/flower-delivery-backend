import { required } from 'joi';
import { Schema, model } from 'mongoose';
const orderSchema = new Schema(
  {
    shopId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    items: [
      {
        flowerId: {
          type: Schema.Types.ObjectId,
          ref: 'flower',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1'],
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price cannot be negative'],
    },
    customer: {
      clientId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const OrderCollection = model('order', orderSchema);
