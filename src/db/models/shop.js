import { Schema, model } from 'mongoose';

const shopSchema = new Schema(
  {
    name: String,
    address: String,
    phone: String,
    email: String,
    description: String,
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

export const ShopCollection = model('shop', shopSchema);
