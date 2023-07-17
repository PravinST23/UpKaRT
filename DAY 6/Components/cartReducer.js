const initialState = [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemIndex = state.findIndex(item => item.name === action.payload.name);
      if (itemIndex === -1) {
        return [...state, action.payload];
      } else {
        const updatedCart = [...state];
        updatedCart.splice(itemIndex, 1);
        return updatedCart;
      }
    default:
      return state;
  }
};

export default cartReducer;
