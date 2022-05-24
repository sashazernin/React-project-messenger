import c from './Menu.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    const Linkfunc = ({isActive}) => (isActive ? c.active : c.Link)
    return (
        <nav className={c.Content}>
            <div>
                <NavLink className={Linkfunc} to="/Profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={Linkfunc} to="/Dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={Linkfunc} to="/Users">Users</NavLink>
            </div>
        </nav>
    )
}
export default Menu;