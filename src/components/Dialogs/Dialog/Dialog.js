import c from './Dialog.module.css';
import React from 'react';
import {Link, Navigate, NavLink} from "react-router-dom";

const Dialog = (props) => {
    let nav = () => {
        return <Navigate to={"/Login"}/>
    }
    return (
        <Link to={`/Dialogs/${props.id}`}>
            <div className={c.content}>
                <img className={c.avatar}
                     src="https://e7.pngegg.com/pngimages/744/742/png-clipart-dog-breed-wolfdog-illustration-exquisite-hand-painted-dogs-avatar-watercolor-painting-heroes.png"></img>
                <span>{props.name}</span>
            </div>
        </Link>
    )
}
export default Dialog;