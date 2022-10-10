import c from './Dialog.module.css';
import React from 'react';
import {Link} from "react-router-dom";
import userPhoto from '../../../imgs/user-img.png'

const Dialog = (props) => {
    return (
        <Link to={`/Dialogs/${props.id}`}>
            <div className={c.content}>
                <img className={c.avatar}
                     src={userPhoto}></img>
                <span className={c.name}>{props.name}</span>
            </div>
        </Link>
    )
}
export default Dialog;