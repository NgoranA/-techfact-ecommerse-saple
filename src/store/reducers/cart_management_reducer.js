import * as ACTION_TYPES from "../actions/action_types";
export const initialState = {
  cartItems: [],
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_QUANTITY: {
      const newc = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...newc],
      };
    }
    case ACTION_TYPES.DECREMENT_QUANTITY: {
      let newc = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      if (action.payload.quantity === 0) {
        newc = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }
      return {
        ...state,
        cartItems: [...newc],
      };
    }
    case ACTION_TYPES.ADD_TO_CART: {
      const chosenProd = state.cartItems.filter(
        (item) => item._id === action.payload._id
      )[0];
      if (!chosenProd) {
        action.payload["quantity"] = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        const newCartItems = state.cartItems.map((itm) => {
          if (itm._id === action.payload._id) {
            return { ...itm, quantity: itm.quantity + 1 };
          }
          return itm;
        });
        return {
          ...state,
          cartItems: [...newCartItems],
        };
      }
    }
    default:
      throw new Error("unknown action");
  }
}
