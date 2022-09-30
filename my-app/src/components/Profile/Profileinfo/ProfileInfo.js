import c from './Profileinfo.module.css';
import React from 'react';
import userImg from "../../../imgs/user-img.png"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div className={c.content}>
            <div className={c.info}>
                <div>
                    <img className={c.logo}
                         src={props.profile.photos.large ? props.profile.photos.large : userImg}></img>
                </div>
                <div className={c.info__text_block}>
                    {props.profile.fullName ?
                        <span className={c.info__text_block__name}>
                    {props.profile.fullName}
                        </span> : null
                    }
                    {props.profile.status ?
                        <span>Description: {props.profile.status}</span>
                        : null
                    }
                    {props.profile.aboutMe ?
                        <span>Description: {props.profile.aboutMe}</span>
                        : null
                    }
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;