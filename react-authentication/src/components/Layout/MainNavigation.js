import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const Ctx = useContext(AuthContext);
  const isLoggedIn = Ctx.isLoggedIn;

  const logoutHandler = ()=> {
    Ctx.logout()
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Auth log</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
