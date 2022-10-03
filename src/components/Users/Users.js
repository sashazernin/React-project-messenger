import React from "react";
import c from "./Users.module.css";
import userImg from "../../imgs/user-img.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {
    return (<div>
            <div>
            </div>
            {props.users.map(u => <div key={u.id} className={c.content}>
                <div className={c.mainInfo}>
                    <div className={c.mainInfo__item}>
                        <NavLink to={`/Profile/${u.id}`}>
                            <img className={c.avatar}
                                 src={u.photos.small != null ? u.photos.small : userImg}
                            />
                        </NavLink>
                        <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.followAndUnfollow(u.followed, u.id)
                        }}> {u.followed ? 'Unfollow' : 'Follow'}
                        </button>
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
            </div>)}
            <button onClick={() => {
                props.showMoreUsers()
            }}>Show more
            </button>
        </div>)
}

export default Users