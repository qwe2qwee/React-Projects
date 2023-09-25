import classes from "./Cart.module.css";
import React, { useState, useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItemss";
import CartContext from "../../store/cart-context";
import Checkout from "./Chekout";

const Cart = (props) => {
  const [isCheckout, setIscheckout] = useState(false);
  const ctx = useContext(CartContext);
  const [submtion, setSubmtion] = useState(false);
  const [didSubmtion, setDidSubmtion] = useState(false);

  const totalAmount = ` ${ctx.totalAmount.toFixed(2)}  ر.س `;
  const hasItems = ctx.items.length > 0;
  const cartIemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIscheckout(true);
  };

  const cancel = () => {
    setIscheckout(false);
  };

  const submitonOrder = async (userData) => {
    setSubmtion(true)
    await fetch(
      "https://mustaff-c110e-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: ctx.items,
        }),
      }
    );
    setSubmtion(false);
    setDidSubmtion(true);
    ctx.clearCart()
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartIemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const acrtionModale = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        إغلاق
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          طلب
        </button>
      )}
    </div>
  );

  const cartModalContentnn = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>المجمل</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout Submit={submitonOrder} can={cancel} />}
      {!isCheckout && acrtionModale}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>جاري إرسال معلومات الطلب...</p>;

  const didSubmtionModalContent = <p>تم إرسال الطلب بنجاح</p>;

  return (
    <Modal onClose={props.onClose}>
      {!submtion && !didSubmtion && cartModalContentnn}
      {submtion && isSubmittingModalContent}
      {!submtion && didSubmtion && didSubmtionModalContent}
    </Modal>
  );
};

export default Cart;
