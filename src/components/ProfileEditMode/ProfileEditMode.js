import React from "react";
import {useForm} from "react-hook-form";
import c from "./ProfileEditMode.module.css"
import {Navigate, NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const ProfileEditMode = (props) => {

    const {
        handleSubmit,
        register,
        formState: {errors},
        clearErrors,
        setError,
        setValue
    } = useForm({
            mode: "all",
            defaultValues: {
                aboutMe: props.profile.aboutMe,
                lookingForAJob: props.profile.lookingForAJob,
                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                fullName: props.profile.fullName,
                github: props.profile.contacts.github,
                vk: props.profile.contacts.vk,
                facebook: props.profile.contacts.facebook,
                instagram: props.profile.contacts.instagram,
                twitter: props.profile.contacts.twitter,
                website: props.profile.contacts.website,
                youtube: props.profile.contacts.youtube,
                mainLink: props.profile.contacts.mainLink,
            }
        },
    )
    const onSubmit = async data => {
        await props.save({
                AboutMe: data.aboutMe,
                contacts: {
                    github: data.github,
                    vk: data.vk,
                    facebook: data.facebook,
                    instagram: data.instagram,
                    twitter: data.twitter,
                    website: data.website,
                    youtube: data.youtube,
                    mainLink: data.mainLink
                },
                lookingForAJob: data.lookingForAJob,
                lookingForAJobDescription: data.lookingForAJobDescription,
                fullName: data.fullName,
                userId: props.userId
            }, setError
        )
        window.location.href="Profile"
    }
    return (
        <div>
            <h1>
                Edit mode
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span>Full name</span>
                    <input {...register('fullName', {
                            required: "Required field"
                        }
                    )} placeholder={''} type={'text'}
                    />
                    {errors.fullName && <div style={{color: 'red'}}>{errors.fullName.message}</div>}
                </div>
                <div>
                    <span>About me</span>
                    <input {...register('aboutMe', {
                            required: "Required field"
                        }
                    )} placeholder={''} type={'text'}
                    />
                    {errors.aboutMe && <div style={{color: 'red'}}>{errors.aboutMe.message}</div>}
                </div>
                <div>
                    <input {...register('lookingForAJob'
                    )} placeholder={''} type={'checkbox'}/>
                    <span>Looking for a job</span>
                </div>
                <div>
                    <span>Skills</span>
                    <input {...register('lookingForAJobDescription', {
                            required: "Required field"
                        }
                    )} placeholder={''} type={'text'}
                    />
                    {errors.lookingForAJobDescription &&
                        <div style={{color: 'red'}}>{errors.lookingForAJobDescription.message}</div>
                    }
                </div>
                <h3>Contacts: </h3>
                {contactValidator(register, errors, clearErrors, 'facebook')}
                {contactValidator(register, errors, clearErrors, 'github')}
                {contactValidator(register, errors, clearErrors, 'instagram')}
                {contactValidator(register, errors, clearErrors, 'mainLink')}
                {contactValidator(register, errors, clearErrors, 'twitter')}
                {contactValidator(register, errors, clearErrors, 'vk')}
                {contactValidator(register, errors, clearErrors, 'website')}
                {contactValidator(register, errors, clearErrors, 'youtube')}
                <button disabled={props.isSavingProgress} >Save</button>
                <NavLink className={c.cancel_button} to={!props.isSavingProgress ? '/Profile' : ''}>Cancel</NavLink>
            </form>
        </div>
    )
}

const contactValidator = (register, errors, clearErrors, name) => {
    return (
        <div>
            <span>{name}</span>
            <input {...register(name, {
                    pattern: {
                        value: /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi,
                        message: "Invalid URL"
                    }
                }
            )} placeholder={''} type={'text'}
            />
            {errors[name] && <div style={{color: 'red'}}>{errors[name].message}</div>}
        </div>
    )
}

export default ProfileEditMode