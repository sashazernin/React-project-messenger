import c from './Profile.module.css';
import React from 'react';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import {Navigate} from "react-router-dom"

const Profile = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <PostsContainer img={props.profile.photos.small} />
            </div>
        )
    }
}
export default Profile