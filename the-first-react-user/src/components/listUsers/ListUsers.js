import React from 'react';

import  style from'./ListUsers.module.css';

const ListUser = props => {
  return (
    <ul className={style.ul}>
      {props.items.map(goal => (
        <li className={style.li} key={goal.id}
        >
          {goal.text}
        </li>
      ))}
    </ul>
  );
};

export default ListUser;