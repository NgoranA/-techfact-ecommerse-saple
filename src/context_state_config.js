import React from "react";
import App from "./App";
import Context from "./store/utils/context";
import * as CartReducer from "./store/reducers/cart_management_reducer";
import * as Actions from "./store/actions/actions";

const ContextState = () => {
  const [state, dispatch] = React.useReducer(
    CartReducer.reducer,
    CartReducer.initialState
  );

  return (
    <Context.Provider
      value={{
        cartItems: state.cartItems,
        incrementQuantity: (product) =>
          dispatch(Actions.incrementQuantity(product)),
        addToCart: (product) => dispatch(Actions.addToCart(product)),
        decrementQuantity: (product) =>
          dispatch(Actions.decrementQuantity(product)),
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextState;
