import Button from "../buttons/Buttons";
import styles from "./Inputs.module.css";
import Card from "./Card/Card";
import Error from "./Error/Errors";

import React, { useState } from "react";

const Inputs = (props) => {
  const [enteredValue1, setEnteredValue1] = useState("");
  const [enteredValue2, setEnteredValue2] = useState("");
  const [error, setError] = useState();

  // const [inValue , setIn] = useState(props)

  const [isValid, setIsvalid] = useState(true);

  const InputChangeHandler1 = (event) => {
    setEnteredValue1(event.target.value);
  };

  const InputChangeHandler2 = (event) => {
    setEnteredValue2(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredValue1.trim().length === 0 ||
      enteredValue2.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      setIsvalid(false);
      return;
    }
    if (+enteredValue2 < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return alert("age");
    }
    props.onAddUser(enteredValue1, enteredValue2);
    setIsvalid(true);
    setEnteredValue1("");
    setEnteredValue2("");
  };

  const eroro = ()=> {
  setError(null);
  }

  return (
    <div>
      {error && (
        <Error cli={eroro}
          title={error.title}
          message={error.message}
          className={props.className}
        />
      )}


      <Card>
        <form onSubmit={formSubmitHandler}>
          <div
            className={`${styles["form_control"]} ${
              !isValid ? styles.not : ""
            }`}>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              type='text'
              onChange={InputChangeHandler1}
              value={enteredValue1}
            />
            <label htmlFor='age'>Age (Years)</label>
            <input
              id='age'
              type='number'
              onChange={InputChangeHandler2}
              value={enteredValue2}
            />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Inputs;
