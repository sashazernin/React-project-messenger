import c from './Profileinfo.module.css';
import React from 'react';
import userImg from "../../../imgs/user-img.png"
const ProfileInfo = (props) => {
  return(
      <div className={c.content}>
        <div className={c.info}>
          <div>
            <img className={c.logo} src={props.profile.photos.large ? props.profile.photos.large : userImg}></img>
          </div>
          <div className={c.info__text_block}>
            <span className={c.info__text_block__name}>
              {props.profile.fullName ? props.profile.fullName : 'none'}
            </span>
            <span>
              None
            </span>
            <span>
              None
            </span>
            <span>
              Description: {props.profile.aboutMe ? props.profile.aboutMe : 'none'}
            </span>
          </div>
        </div>
      </div>
  )
}
export default ProfileInfo;