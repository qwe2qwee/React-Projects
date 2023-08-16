import react, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = react.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activ = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      activ: activ,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}>
      <label htmlFor='email'>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
