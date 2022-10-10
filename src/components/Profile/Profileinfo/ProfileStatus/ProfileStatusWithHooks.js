import c from './ProfileStatus.module.css';
import React, {useEffect} from 'react';
import userImg from "../../../../imgs/user-img.png"
import {useState} from "react";
import {useForm} from "react-hook-form";

const ProfileStatusWithHooks = (props) => {

    const {
        register,
        formState: {errors},
        reset
    } = useForm({
        mode: "all"
    })

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(
        () => {
            setStatus(props.status)
        },
        [props.status]
    )

    const switchEditMode = () => {
        setEditMode(!editMode)
    }
    const onStatusChange = (e) => {
        if (!errors.editStatus) {
            setStatus(e.target.value)
            props.updateStatus(e.target.value)
        }
        reset()
        switchEditMode()
    }
    return (
        <form className={c.body}>
            {!editMode ?
                <div>
                    <span onClick={props.isOwner && switchEditMode}> {status ? status : 'Status'}</span>
                </div>
                :
                <div>
                    <input {...register('editStatus', {
                            required: {},
                            maxLength: {
                                value: 300,
                                message: "The maximum length of the status is 300 symbols"
                            }
                        }
                    )} type="text" onBlur={onStatusChange} autoFocus={true} defaultValue={status}/>
                    {errors.editStatus && <div style={{color: 'red'}}>{errors.editStatus.message}</div>}
                </div>
            }
        </form>
    )
}
export default ProfileStatusWithHooks;