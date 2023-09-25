import CartContext from "./cart-context";

import { useReducer } from "react";

const defaultCartstate = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 1) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 0) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existItem.price;

    let updatedItems;

    if (existItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existItem, amount: existItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartstate;
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

  const clearCartHandler = () => {
    dispatchCartAction({type:"CLEAR"})
  }

  const cartContext = {
    items: catState.items,
    totalAmount: catState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart:clearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
