import c from './Profileinfo.module.css';
import React, {useEffect} from 'react';
import userImg from "../../../imgs/user-img.png"
import {useState} from "react";

const ProfileStatusWithHooks = (props) => {

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
        setStatus(e.target.value)
        props.updateStatus(e.target.value)
        switchEditMode()
    }
        return (
            <div>
                {!editMode ?
                    <div>
                        <span onClick={switchEditMode} > {status?status:'Status'}</span>
                    </div>
                    :
                    <div>
                        <input onBlur={onStatusChange} autoFocus={true} defaultValue={status}/>
                    </div>
                }
            </div>
        )
}
export default ProfileStatusWithHooks;