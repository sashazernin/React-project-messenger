import React from 'react';
import Posts from "./Posts";
import {addPost, postText} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        Posts: state.profilePage.Posts,
        PostText: state.profilePage.PostText,
        avatar: state.profilePage.profile.photos.small
    }
}

let mapDispatchToProps = {
    addPost,
    postText
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

    // return <Context.Consumer>
    //     {store => {
    //         let state = store.getState()
    //
    //         let dispatch = store.dispatch.bind(store)
    //
    //         let AddPost = () => {
    //             dispatch(AddPostActionCreator())
    //         }
    //
    //         let NewPostText = (text) => {
    //             dispatch(NewPostTextActionCreator(text))
    //         }
    //
    //         return (
    //             <Posts
    //                 Posts={state.ProfilePage.Posts}
    //                 AddPost={AddPost}
    //                 NewPostText={NewPostText}
    //                 PostText={state.ProfilePage.PostText}
    //             />
    //         )
    //     }
    //     }
    // </Context.Consumer>
export default PostsContainer;