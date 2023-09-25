import CartIcon from "../Cart/CartIcont";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnhight, setBtnhight] = useState(false);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, items) => {
    return curNumber + items.amount;
  }, 0);

  const btnClass = `${classes.button} ${btnhight ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnhight(true);

    const timer = setTimeout(()=> {
      setBtnhight(false)
    },300)

    return ()=> {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>{<CartIcon />}</span>
      <span> الطلبات  </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
