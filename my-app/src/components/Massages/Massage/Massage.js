import c from './Massage.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
const Massage = (props) => {
  return(
      <div className={c.content}>
          <img className={c.avatar} src="https://e7.pngegg.com/pngimages/744/742/png-clipart-dog-breed-wolfdog-illustration-exquisite-hand-painted-dogs-avatar-watercolor-painting-heroes.png"></img>
          <span className={c.text}>{props.massage}</span>
      </div>
  )
}
export default Massage;