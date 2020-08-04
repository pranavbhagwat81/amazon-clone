export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: product.id,
      price: product.price,
      name: product.name,
      quantity: 1,
      img: product.img,
    },
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_PRODUCTS_FROM_CART",
  };
};

export const saveLoggedInUser = (user) => {
  return {
    type: "SAVE_LOGGED_IN_USER",
    payload: user,
  };
};

export const addProductQuantityInCart = (id) => {
  return {
    type: "ADD_PRODUCT_QUANTITY",
    payload: id,
  };
};

export const decreaseProductQuantityInCart = (id) => {
  return {
    type: "DECREASE_PRODUCT_QUANTITY",
    payload: id,
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
