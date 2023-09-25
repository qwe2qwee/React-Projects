import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isNotFive = (fa) => fa.trim().length !== 5;

const Checkout = (props) => {
  const [formIsfalidity, setFormIsfalidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInput = useRef("");
  const streetInput = useRef("");
  const postalInput = useRef("");
  const cityInput = useRef("");
  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value;

    const enteredStreet = streetInput.current.value;

    const enteredPostal = postalInput.current.value;

    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);

    const enteredStreetIsValid = !isEmpty(enteredStreet);

    const enteredCityIsValid = !isEmpty(enteredCity);

    const enteredPostalIsValid = !isNotFive(enteredPostal);

    setFormIsfalidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid
    });

    const formIsvalid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsvalid) {
      return;
    }
    props.Submit(
      {
        name:enteredName,
        street:enteredStreet,
        city:enteredCity,
        postalCode:enteredPostal
      }
      
    )
    nameInput.current.value = ''
    cityInput.current.value = ''
    postalInput.current.value = ''
    streetInput.current.value = ''

  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>إسمك</label>
        <input type='text' id='name' ref={nameInput} />
        {!formIsfalidity.name && <p>الرجاء إدخال الاسم</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>الحي </label>
        <input type='text' id='street' ref={streetInput} />
        {!formIsfalidity.street && <p>الرجاء إدخال إسم الحي </p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>الرمز البريدي</label>
        <input type='text' id='postal' ref={postalInput} />
        {!formIsfalidity.postalCode && <p>الرجاء إ دخال رمز بريدي أكثر من 5 ارقام</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>المدينة</label>
        <input type='text' id='city' ref={cityInput} />
        {!formIsfalidity.city && <p>الرجاء إدخال اسم الحي السكني</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.can}>
          إلغاء
        </button>
        <button className={classes.submit}>تأكيد الطلب</button>
      </div>
    </form>
  );
};

export default Checkout;
