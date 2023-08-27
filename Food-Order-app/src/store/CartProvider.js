import CartContext from "./cart-context";

import { useReducer } from "react";

const defaultCartstate = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 1) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartstate;
};

const CartProvider = (props) => {
  const [catState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartstate
  );

  const addItemToCartHandler = (props) => {
    dispatchCartAction({ type: 1, item: props });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 0, id: id });
  };

  const cartContext = {
    items: catState.items,
    totalAmount: catState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
