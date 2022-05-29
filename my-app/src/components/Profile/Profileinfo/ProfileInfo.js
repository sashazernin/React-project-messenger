import c from './Profileinfo.module.css';
import React from 'react';
const ProfileInfo = (props) => {
  return(
      <div className={c.content}>
        <div className={c.info}>
          <div>
            <img className={c.logo} src={props.profile.photos.large}></img>
          </div>
          <div className={c.info__text_block}>
            <span className={c.info__text_block__name}>
              {props.profile.fullName}
            </span>
            <span>
              None
            </span>
            <span>
              None
            </span>
            <span>
              {props.profile.aboutMe}
            </span>
          </div>
        </div>
      </div>
  )
}
export default ProfileInfo;