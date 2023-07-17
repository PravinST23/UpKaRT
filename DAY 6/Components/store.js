import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';

// Combine the reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

// Create the store
const store = createStore(rootReducer);

export default store;
