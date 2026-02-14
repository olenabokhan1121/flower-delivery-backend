import { Schema, model } from 'mongoose';

const favoriteSchema = new Schema(
  {
    clientId: {
      type: String,
      required: true,
      unique: true,
    },

    favoriteFlowers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'flower',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const FavoriteCollection = model('favorite', favoriteSchema);
