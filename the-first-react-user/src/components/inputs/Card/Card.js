import style from "./Card.css.module.css";

const Card = (props) => {
  return <div className={`${style.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
