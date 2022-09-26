import c from './Header.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../imgs/Logo.png"
const Header = (props) => {
  return(
      <header className={c.header}>
        <img src={Logo}></img>
          <div className={c.loginBlock}>
              {props.isAuth ? props.login :
                  <NavLink to={'/login'}>Login</NavLink>
              }
               {props.isAuth ? <button onClick={props.logout}>Log out</button> : ''}

          </div>
      </header>
  )
}
export default Header;