import c from './Header.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
const Header = (props) => {
  return(
      <header className={c.header}>
        <img src="https://i.pinimg.com/736x/42/12/19/42121987e913a73ee9e656ce4060a77f--circle-game-a-circle.jpg"></img>
          <div className={c.loginBlock}>
              {props.isAuth ? props.login :
                  <NavLink  to={'/login'}>Login</NavLink>
              }
          </div>
      </header>
  )
}
export default Header;