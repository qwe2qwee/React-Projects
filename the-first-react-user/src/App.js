import React, { useState } from "react";
import Inputs from "./components/inputs/Inputs";
import ListUser from "./components/listUsers/ListUsers";
import "./App.css";

const App = () => {
  const [User, setUser] = useState([]);
  
  const addUserHandler = (u1, u2) => {
    let userr = `${u1} (${u2} years old)`;
    setUser((prevGoals) => {
      return[...prevGoals ,{ text:userr , id:Math.random().toLocaleString()}];
    });
  };
  
  let content = (
    <p style={{ textAlign: "center" }}>No user found please type! </p>
  );
  
  if (User.length > 0) {
    content = <ListUser items={User} />;
  }
  
  return (
    <div>
      <section >
        <Inputs onAddUser={addUserHandler} />
      </section>
      <section id='goals'>{content}</section>
    </div>
  );
};

export default App;
