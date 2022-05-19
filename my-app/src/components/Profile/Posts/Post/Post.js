import c from './Post.module.css';
import React from 'react';
const Post = (props) => {
  return(
    <div className={c.Post}>
      <img className={c.Post__img} src="https://e7.pngegg.com/pngimages/744/742/png-clipart-dog-breed-wolfdog-illustration-exquisite-hand-painted-dogs-avatar-watercolor-painting-heroes.png"></img>
      <span className={c.Post_text}>{props.text}</span>
      <span>Likes {props.likes}</span>
    </div>
  )
}
export default Post;