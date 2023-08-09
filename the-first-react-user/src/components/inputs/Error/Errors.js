import React from "react";
import Card from "../Card/Card";
import Button from "../../buttons/Buttons";
import styles from "./Errors.module.css";

const Error = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.cli}>
      <Card className={styles.md}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          {" "}
          <Button onClick={props.cli}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;
