import c from './Menu.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    const isActive = ({isActive}) => (isActive ? c.active : c.Link)
    return (
        <nav className={c.Content}>
            <div>
                <NavLink className={isActive} to="/Profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to="/Dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={isActive} to="/Users">Users</NavLink>
            </div>
        </nav>
    )
}
export default Menu;