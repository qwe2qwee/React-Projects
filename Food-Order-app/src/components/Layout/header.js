import react, { Fragment } from "react";
import img from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";




import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment> 
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="img"/>
      </div>
    </Fragment>
  );
};

export default Header;
