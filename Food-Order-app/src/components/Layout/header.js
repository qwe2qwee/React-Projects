import { Fragment } from "react";
import img from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";




import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment> 
      <header className={classes.header}>
        <h1>أشهر أكلات حي الجامعة</h1>
        <HeaderCartButton onClick={props.show}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="img"/>
      </div>
    </Fragment>
  );
};

export default Header;
