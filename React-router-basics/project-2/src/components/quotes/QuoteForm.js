import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom/cjs/react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntered, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAdd({ author: enteredAuthor, text: enteredText });
  }

  const formFoucusedHandler = () => {
    setIsEntering(true);
  };

  const finsh = ()=> {
    setIsEntering(false)
  }

  return (
    <Fragment>
      <Prompt
        when={isEntered}
        message={(location) =>
          "Are sure you want to leave this page you will lose all your work"
        }
      />
      <Card>
        <form
          onFocus={formFoucusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={finsh}>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
