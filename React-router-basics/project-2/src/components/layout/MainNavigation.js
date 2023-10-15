import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MainNavigation.module.css";

const MainNavivation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            {" "}
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a qoute{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavivation;
