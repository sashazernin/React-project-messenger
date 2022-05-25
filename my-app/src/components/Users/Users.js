import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import userImg from "../../imgs/user-img.png"

const Users = (props) => {
let getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
}

    return (
    <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div className={c.content}>
                    <div className={c.mainInfo}>
                        <div className={c.mainInfo__item}>
                            <img className={c.avatar}
                                 src={u.photos.small != null ? u.photos.small : userImg}/>
                            {u.followed ?
                                <button onClick={() => {props.followUser(u.id)}}>Follow</button> :
                                <button onClick={() => {props.unfollowUser(u.id)}}>Unfollow</button>
                            }
                        </div>
                        <div className={c.mainInfo__item}>
                    <span>
                        {u.name}
                    </span>
                            <span>
                        {u.status}
                    </span>
                        </div>
                    </div>
                    <div>
                <span>
                    {u.country}
                </span>
                        <span>
                    {u.city}
                </span>
                    </div>
                </div>
            )
        }
    </div>
    )
}

export default Users