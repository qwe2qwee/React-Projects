import Input from "../../UI/Input";
import classes from "./MealsItemF.module.css";
import { useRef, useState } from "react";

const MealItemFrom = (props) => {
  const [amountIsvalid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredNumber < 1 ||
      enteredNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label={"الكمية"}
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ إضافة</button>
      {!amountIsvalid&& <p>الرجاء إدخال العدد(1-5).</p>}
    </form>
  );
};

export default MealItemFrom;
