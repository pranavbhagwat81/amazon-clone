import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCT") {
    return [...state, action.payload];
  }
  if (action.type === "REMOVE_PRODUCT") {
    return state.filter((prod) => {
      return prod.id !== action.payload.id;
    });
  }
  return state;
};

export default combineReducers({
  cart: cartReducer,
});
