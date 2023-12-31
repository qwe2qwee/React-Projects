import MealItemFrom from "./MealItemForm";
import { useContext } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}  ر.س `;

  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
