import { useState, useRef, useContext } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const inputEmail = useRef();
  const inputPass = useRef();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmeting = (e) => {
    e.preventDefault();

    const enteredEmail = inputEmail.current.value;
    const enteredPass = inputPass.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtBl5RRybRJI6MfFjXmw4L3aLMaMibeEw";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtBl5RRybRJI6MfFjXmw4L3aLMaMibeEw";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime()+ (data.expiresIn * 1000 ))
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onSubmeting}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={inputEmail} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={inputPass} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}{" "}
          {isLoading && <p>loading for...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
