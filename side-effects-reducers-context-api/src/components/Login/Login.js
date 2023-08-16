import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/input/Input";

const emailRecucer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const passRec = (statep, actionp) => {
  if (actionp.type === "USER_INPUTp") {
    return { value: actionp.val, isValid: actionp.val.trim().length > 6 };
  }

  if (actionp.type === "INPUT_B") {
    return { value: statep.value, isValid: statep.value.trim().length > 6 };
  }
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const ser = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailState, dispatchEmail] = useReducer(emailRecucer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPass] = useReducer(passRec, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsvalid } = emailState;
  const { isValid: passwordIsvalid } = passwordState;

  const use = () => {
    const settt = setTimeout(() => {
      setFormIsValid(emailIsvalid && passwordIsvalid);
    }, 200);
    return () => clearTimeout(settt);
  };

  useEffect(use, [emailIsvalid, passwordIsvalid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "USER_INPUTp", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: "INPUT_B" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ser.OnI(emailState.value, passwordState.value);
    } else if (!emailIsvalid) {
      emailRef.current.activ()
    } else {
      passwordRef.current.activ()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type='email'
          label='E-Mail'
          id='email'
          isValid={emailIsvalid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          value={emailState.value}
        />
        <Input
          ref={passwordRef}
          type='password'
          label='Password'
          id='password'
          isValid={passwordIsvalid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          value={passwordState.value}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
