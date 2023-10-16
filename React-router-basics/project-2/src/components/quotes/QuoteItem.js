import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const QuoteItem = (props) => {
  const path = "/quotes/" + props.id ;
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={path}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
