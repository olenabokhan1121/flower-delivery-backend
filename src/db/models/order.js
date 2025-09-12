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
          ref: 'Flower',
        },
        name: String,
        quantity: Number,
      },
    ],
    totalPrice: Number,
    customer: {
      name: String,
      phone: String,
      email: String,
      address: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const OrderCollection = model('order', orderSchema);
