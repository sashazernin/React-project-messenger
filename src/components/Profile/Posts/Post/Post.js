import c from './Post.module.css';
import React from 'react';
import userImg from "../../../../imgs/user-img.png";
const Post = (props) => {
  return(
    <div className={c.Post}>
      <img className={c.Post__img} src={props.img ? props.img : userImg}></img>
      <span className={c.Post_text}>{props.text}</span>
      <span>Likes {props.likes}</span>
    </div>
  )
}
export default Post;