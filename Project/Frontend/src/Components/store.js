import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';

const initialRole = null;
const roleReducer = (state = initialRole, action) => {
  switch (action.type) {
    case 'UPDATE_ROLE':
      return action.payload;
    default:
      return state;
  }
};


const initialEmail = "";
const emailReducer = (state = initialEmail, action) => {
  switch (action.type) {
    case "EMAIL":
      return action.payload;
    default:
      return state;
  }
};

const initialDetails = [];
const detailReducer = (state = initialDetails, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  role: roleReducer,
  email: emailReducer,
  set: detailReducer,

});

const store = createStore(rootReducer);

export default store;
