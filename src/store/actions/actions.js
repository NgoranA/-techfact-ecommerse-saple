import * as ACTION_TYPES from "./action_types";

export const incrementQuantity = (product) => {
  return {
    type: ACTION_TYPES.INCREMENT_QUANTITY,
    payload: product,
  };
};

export const decrementQuantity = (product) => {
  return {
    type: ACTION_TYPES.DECREMENT_QUANTITY,
    payload: product,
  };
};

export const selectCategory = (category) => {
  return {
    type: ACTION_TYPES.SELECT_CATEGORY,
    payload: category,
  };
};

export const addToCart = (product) => {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product,
  };
};

export const searchProduct = (search) => {
  return {
    type: ACTION_TYPES.SEARCH_PRODUCT,
    payload: search,
  };
};
