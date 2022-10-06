import c from './Profileinfo.module.css';
import React from 'react';
import userImg from "../../../imgs/user-img.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import github from "../../../imgs/contacts/github.png"
import vk from "../../../imgs/contacts/vk.png"
import facebook from "../../../imgs/contacts/facebook.png"
import instagram from "../../../imgs/contacts/instagram.png"
import twitter from "../../../imgs/contacts/twitter.png"
import website from "../../../imgs/contacts/website.png"
import youtube from "../../../imgs/contacts/youtube.png"
import mainLink from "../../../imgs/contacts/mainLink.png"
import Contact from "./Contact/Contact";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoChange = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }

    }

    return (
        <div className={c.content}>
            <div className={c.info}>
                <div className={c.info__photo}>
                    <img className={c.photo}
                         src={props.profile.photos.large ? props.profile.photos.large : userImg}>
                    </img>
                    <NavLink className={c.edit_button} to="/Edit">Edit</NavLink>
                </div>
                <div className={c.info__text_block}>
                    {props.profile.fullName ?
                        <span className={c.info__text_block__name}>
                    {props.profile.fullName}
                        </span> : 'Name'
                    }
                    <ProfileStatusWithHooks
                        isOwner={props.isOwner}
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                    {props.profile.aboutMe ?
                        <span>About me: {props.profile.aboutMe}</span>
                        : null
                    }
                    {props.profile.lookingForAJob ?
                        <span>looking for a job</span>
                        : <span>not looking for a job</span>
                    }
                    {props.profile.lookingForAJobDescription ?
                        <span>Skills: {props.profile.lookingForAJobDescription}</span>
                        : null
                    }
                    <span>Contacts:
                    </span>
                    <div className={c.contacts}>
                        {contact(props.profile.contacts.github, github)}
                        {contact(props.profile.contacts.vk, vk)}
                        {contact(props.profile.contacts.facebook, facebook)}
                        {contact(props.profile.contacts.instagram, instagram)}
                        {contact(props.profile.contacts.twitter, twitter)}
                        {contact(props.profile.contacts.website, website)}
                        {contact(props.profile.contacts.youtube, youtube)}
                        {contact(props.profile.contacts.mainLink, mainLink)}
                    </div>
                </div>
            </div>
            <div>
                {props.isOwner && <input type={'file'} onChange={onPhotoChange}/>}
            </div>
        </div>
    )
}

const contact = (contact, image) => {
    return (
        <div className={c.contacts__contact}>
            <Contact
                contact={contact}
                image={image}
            />
        </div>
    )
}

export default ProfileInfo;