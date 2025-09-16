import { FlowerCollection } from '../db/models/flower.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getShopsFlowers = async ({
  page,
  perPage,
  sortBy,
  sortOrder,
  id,
}) => {
  let skip = (page - 1) * perPage;

  const flowersCount = await FlowerCollection.countDocuments({ shopId: id });

  const paginationsFlowers = await FlowerCollection.find({ shopId: id })
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder })
    .populate('shopId')
    .exec();

  const paginationData = calculatePaginationData(flowersCount, perPage, page);

  return {
    flowers: paginationsFlowers,
    pagination: paginationData,
  };
};

export const getAllFlowers = async ({ page, perPage, sortBy, sortOrder }) => {
  let skip = (page - 1) * perPage;
  const flowersCount = await FlowerCollection.countDocuments();
  const paginationsFlowers = await FlowerCollection.find()
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(flowersCount, perPage, page);
  return {
    flowers: paginationsFlowers,
    ...paginationData,
  };
};
