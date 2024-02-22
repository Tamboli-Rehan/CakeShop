export const addToCart = (menuItem) => {
  return {
    type: "ADD_TO_CART",
    payload: menuItem,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
export const buyNow = () => {
  return {
    type: "BUY_NOW",
  };
};
