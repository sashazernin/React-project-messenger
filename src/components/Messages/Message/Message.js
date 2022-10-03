import c from './Message.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
const Message = (props) => {
  return(
      <div className={c.content}>
          <img className={c.avatar} src="https://e7.pngegg.com/pngimages/744/742/png-clipart-dog-breed-wolfdog-illustration-exquisite-hand-painted-dogs-avatar-watercolor-painting-heroes.png"></img>
          <span className={c.text}>{props.message}</span>
      </div>
  )
}
export default Message;