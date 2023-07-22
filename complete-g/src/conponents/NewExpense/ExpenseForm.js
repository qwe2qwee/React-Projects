import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enterTT, setEnterT] = useState("");
  const [enterAA, setEnterA] = useState("");
  const [enterDD, setEnterD] = useState("");

  // const [enterr, setEnterr] = useState({
  //   enterT: "",
  //   enterA: "",
  //   enterD: "",
  // });

  const tittleChange = (event) => {
    setEnterT(event.target.value);

    // setEnterr({
    //   ...enterr,
    //   enterT:event.target.value
    // })

    // setEnterr((prevv) => {
    //   return { ...prevv, enterT: event.target.value };
    // });
  };

  const AmountChanged = (event) => {
    setEnterA(event.target.value);

    // setEnterr({
    //   ...enterr,
    //   enterA:event.target.value
    // })

    // setEnterr((prevv) => {
    //   return { ...prevv, enterA: event.target.value };
    // });
  };

  const DateChanged = (event) => {
    setEnterD(event.target.value);

    // setEnterr({
    //   ...enterr,
    //   enterD:event.target.value
    // })

    // setEnterr((prevv) => {
    //   return { ...prevv, enterD: event.target.value };
    // });
  };

  const submitH = (e) => {
    e.preventDefault();

    const ExpenseDate = {
      title: enterTT,
      amount: Number(enterAA),
      date: new Date(enterDD),

      // Title: enterr.enterT,
      // Amount: enterr.enterA,
      // Date: new Date(enterr.enterD)
    };

    props.DataFromForm(ExpenseDate);

    setEnterA("");
    setEnterD("");
    setEnterT("");
    // setEnterr({
    //   enterA: "",
    //   enterD: "",
    //   enterT: "",
    // });
  };
  return (
    <form onSubmit={submitH}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enterTT}
            // value={enterr.enterA}
            onChange={tittleChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enterAA}
            // value={enterr.enterA}
            min='0.01'
            step='0.01'
            onChange={AmountChanged}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            value={enterDD}
            // value={enterr.enterD}
            max='2022-12-31'
            onChange={DateChanged}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Epense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
