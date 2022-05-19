import c from './Dialog.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
const Dialog = (props) => {
  return(
      <div className={c.content}>
          <img className={c.avatar} src="https://e7.pngegg.com/pngimages/744/742/png-clipart-dog-breed-wolfdog-illustration-exquisite-hand-painted-dogs-avatar-watercolor-painting-heroes.png"></img>
          <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
  )
}
export default Dialog;