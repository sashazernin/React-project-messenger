import c from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    let AddPost = () => {
        props.addPost()
    }

    let NewPostText = (e) => {
        props.postText(e.target.value)
    }

    return (
        <div>
      <h4 className={c.pf_title}>
        My posts
      </h4>
            <textarea className={c.pf__newpost_text} placeholder={"Введите текст поста"} value={props.PostText} onChange={NewPostText}/>
            <div className={c.pf__sendbut}>
                <button className={c.pf__sendbut__button} onClick={AddPost}>Send</button>
            </div>
            <div className={c.posts}>
                {props.Posts.map(p => <Post key={p.id} text={p.message} likes={p.likes} img = {props.img}/>)}
            </div>
        </div>
    )
}
export default Posts;