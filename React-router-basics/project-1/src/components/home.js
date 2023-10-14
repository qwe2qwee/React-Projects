import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import classes from './MainHeader.module.css'


const MainHead = ()=> {
  return (
    <header className={classes.header}> 
      <nav>
        <ul>
          <li><NavLink activeClassName={classes.active} to="/Products">Products </NavLink></li>
          <li><NavLink activeClassName={classes.active} to="/welcome">Welcome </NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHead;