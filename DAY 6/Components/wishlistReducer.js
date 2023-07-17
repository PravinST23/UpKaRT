const initialState = [];
const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      const itemIndex = state.findIndex(item => item.name === action.payload.name);
      if (itemIndex === -1) {
        return [...state, action.payload];
      } else {
        const updatedWishlist = [...state];
        updatedWishlist.splice(itemIndex, 1);
        return updatedWishlist;
      }
    default:
      return state;
  }
};

export default wishlistReducer;
