import { Fragment } from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const pt = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClose={props.onClose} />, pt)}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, pt)}
    </Fragment>
  );
};

export default Modal;
