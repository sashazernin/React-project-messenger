import c from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {

    let PostsCount = props.Posts.map(p => <Post id={p.id} text={p.massage} likes={p.likes}/>)

    let NewPost = React.createRef()

    let AddPost = () => {
        props.AddPost(NewPost.current.value)
        NewPost.current.value = ""
    }

    return (
        <div>
      <span className={c.pf_title}>
        My posts
      </span>
            <textarea className={c.pf__newpost_text} ref={NewPost}></textarea>
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