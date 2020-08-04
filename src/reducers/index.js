import { combineReducers } from "redux";

const cartReducer = (state = {}, action) => {
  if (action.type === "ADD_PRODUCT") {
    state[action.payload.id] = action.payload;
    return { ...state };
  }
  if (action.type === "REMOVE_PRODUCT") {
    delete state[action.payload];
    return { ...state };
  }
  if (action.type === "ADD_PRODUCT_QUANTITY") {
    state[action.payload].quantity++;
    return { ...state };
  }
  if (action.type === "DECREASE_PRODUCT_QUANTITY") {
    if (state[action.payload].quantity) {
      if (state[action.payload].quantity === 1) {
        delete state[action.payload];
        return { ...state };
      } else {
        state[action.payload].quantity--;
        return { ...state };
      }
    }
  }
  if (action.type === "EMPTY_PRODUCTS_FROM_CART") {
    state = {};
    return { ...state };
  }
  return state;
};

const userReducer = (user = null, action) => {
  if (action.type === "SAVE_LOGGED_IN_USER") {
    return action.payload;
  }
  return user;
};

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
});
