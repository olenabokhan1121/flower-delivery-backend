import { Schema, model } from 'mongoose';
import { getEnvVar } from './utils/getEnvVar.js';
const flowerSchema = new Schema(
  {
    shopId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: String,
    description: String,
    price: Number,
    imageUrl: {
      type: String,
      default: `${getEnvVar('APP_DOMAIN')}/uploads/no-photo.png`,
    },
    quantity: Number,
    category: String,
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

export const FlowerCollection = model('flower', flowerSchema);
