export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (cartItemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: cartItemId,
});

export const updateCart = (cartItems) => {
  return {
    type: 'UPDATE_CART_ITEMS', // Updated action type
    payload: cartItems,
  };
};
