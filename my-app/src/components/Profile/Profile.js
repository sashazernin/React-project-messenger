import c from './Profile.module.css';
import React from 'react';
import Posts from './Posts/Posts';
import Profileinfo from "./Profileinfo/Profileinfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div>
            <Profileinfo/>
            <PostsContainer/>
        </div>
    )
}
export default Profile;