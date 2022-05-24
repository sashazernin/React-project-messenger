import React from "react";
import c from "./Users.module.css";

const Users = (props) => {

    if(props.users.length === 0){
        props.setUsers(
            [
                {id: 1, followed: true, name: "Dmitry", status: "Kot", country: "Belarus", city: "Minsk"},
                {id: 2, followed: false, name: "Sasha", status: "what?", country: "Belarus", city: "Minsk"},
                {id: 3, followed: true, name: "Danil", status: "Dota?", country: "Belarus", city: "Minsk"},
                {id: 4, followed: false, name: "Timofey", status: "MEME", country: "Belarus", city: "Minsk"}
            ]
        )
    }

    return (
    <div>
        {
            props.users.map(u => <div className={c.content}>
                    <div className={c.mainInfo}>
                        <div className={c.mainInfo__item}>
                            <img className={c.avatar}
                                 src="https://e7.pngegg.com/pngimages/744/742/png-clipart-dog-breed-wolfdog-illustration-exquisite-hand-painted-dogs-avatar-watercolor-painting-heroes.png"/>
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