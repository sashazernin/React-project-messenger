import React from "react";
import c from "./Users.module.css";
import * as axios from "axios";
import userImg from "../../imgs/user-img.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setCurrentPage(this.props.currentPage + 1)
        })
    }

    showMore = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setCurrentPage(this.props.currentPage + 1)
        })

    }

    render() {
        return (
            <div>
                <div>
                </div>
                {
                    this.props.users.map(u => <div className={c.content}>
                            <div className={c.mainInfo}>
                                <div className={c.mainInfo__item}>
                                    <img className={c.avatar}
                                         src={u.photos.small != null ? u.photos.small : userImg}/>
                                    {u.followed ?
                                        <button onClick={() => {
                                            this.props.followUser(u.id)
                                        }}>Follow</button> :
                                        <button onClick={() => {
                                            this.props.unfollowUser(u.id)
                                        }}>Unfollow</button>
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
                <button onClick={() => {this.showMore()}}>Show more</button>
            </div>
        )
    }
}

export default Users