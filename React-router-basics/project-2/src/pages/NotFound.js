import { Link } from "react-router-dom/cjs/react-router-dom";
import classes from "./NotFound.module.css";
import img1 from "../imgs/404 Error with a cute animal-amico.png";

const NotFound = () => {
  return (
    <div className={classes.countainer}>
      <div className={classes.header}>
        <h1>404</h1>
        <h3>Page NotFound!</h3>
      </div>
      <div className={classes.footer}>
        <p>
          We'r sorry, the page you requested could not be found. Please go back
          to the homepage!
        </p>
        <Link className={classes.btn} to='/quotes'>
          GO HOME
        </Link>
      </div>
      <img alt='notfound' src={img1} />
    </div>
  );
};

export default NotFound;
