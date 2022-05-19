import c from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {

    let PostsCount = props.Posts.map(p => <Post id={p.id} text={p.message} likes={p.likes}/>)

    let NewPost = React.createRef()

    let AddPost = () => {
        props.Dispatch({type: 'AddPost'})
    }

    let NewPostText = () => {
        props.Dispatch({type:'PostText',text:NewPost.current.value})
    }

    return (
        <div>
      <span className={c.pf_title}>
        My posts
      </span>
            <textarea className={c.pf__newpost_text} ref={NewPost} value={props.PostText} onChange={NewPostText}/>
            <div className={c.pf__sendbut}>
                <button className={c.pf__sendbut__button} onClick={AddPost}>Send</button>
            </div>
            <div className={c.posts}>
                {PostsCount}
            </div>
        </div>
    )
}
export default Posts;