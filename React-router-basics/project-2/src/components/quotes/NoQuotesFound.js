import classes from './NoQuotesFound.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import img1 from '../../imgs/404 Error with a cute animal-amico.png'


const NoQuotesFound = () => {
  return (
    <div className={classes.countainer}>
      <div className={classes.header}>
        <h1>404</h1>
        <h3>No quote Found!</h3>
      </div>
      <div className={classes.footer}>
        <p>
          We'r sorry, the page you requested could not have a quote. Please go to
          add a quote!
        </p>
        <Link className={classes.btn} to='/new-quote'>
          Add a quote
        </Link>
      </div>
      <img alt='notfound' src={img1} />
    </div>
  );
};

export default NoQuotesFound;
