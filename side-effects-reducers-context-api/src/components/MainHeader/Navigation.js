import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const ser = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ser.isLogged && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ser.isLogged && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ser.isLogged && (
          <li>
            <button onClick={ser.OnL}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
