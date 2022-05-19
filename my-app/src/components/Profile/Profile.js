import c from './Profile.module.css';
import React from 'react';
import Posts from './Posts/Posts';
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return(
      <div>
        <Profileinfo/>
        <Posts Posts = {props.Posts} AddPost={props.AddPost} />
      </div>
  )
}
export default Profile;