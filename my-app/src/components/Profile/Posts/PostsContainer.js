import React from 'react';
import Post from './Post/Post';
import {AddPostActionCreator, NewPostTextActionCreator} from "../../../redux/ProfileReducer";

const Posts = (props) => {

    return (
       <Posts
           Posts = {props.state}
           AddPost = {props.store.dispatch(AddPostActionCreator())}
           NewPostText = {props.store.dispatch(NewPostTextActionCreator())}
           PostText = {props.state.PostText}
       />
    )
}
export default Posts;