const parseSortBy = (value) => {
  const keys = ['price', 'createdAt'];

  if (typeof value === 'undefined' || !keys.includes(value)) {
    return 'createdAt';
  }

  return value;
};

const parseSortOrder = (value) => {
  if (typeof value === 'undefined') {
    return 'desc';
  }

  if (value !== 'asc' && value !== 'desc') {
    return 'desc';
  }
  return value;
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
