import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useRef, useContext } from "react";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();

  const Ctx = useContext(AuthContext);

  const idToken = Ctx.token;

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPass = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAtBl5RRybRJI6MfFjXmw4L3aLMaMibeEw",
      {
        method: "POST",
        body: JSON.stringify({
          idToken,
          password: enteredNewPass,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
          minLength='7'
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
