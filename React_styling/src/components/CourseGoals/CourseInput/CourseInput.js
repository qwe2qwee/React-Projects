import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold ;
//     display: block;
//     color:${(props) => (!props.invalid ? "red" : "black")};
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (!props.invalid ? "red" : "#ccc")};
//     background:${(props) => (!props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // const [inValue , setIn] = useState(props)

  const [isValid, setIsvalid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsvalid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setIsvalid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form_control']} ${!isValid ? styles.not : ''}`}>
        <label>Your Goals</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
