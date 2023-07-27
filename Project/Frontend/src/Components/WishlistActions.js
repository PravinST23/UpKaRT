export const addToWishlist = (item) => {
  return {
    type: 'ADD_TO_WISHLIST',
    payload: item,
  };
};

export const removeFromWishlist = (itemId) => {
  return {
    type: 'REMOVE_FROM_WISHLIST',
    payload: itemId,
  };
};
