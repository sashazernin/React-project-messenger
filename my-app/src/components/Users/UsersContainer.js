import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import * as axios from 'axios'
import Preloader from "../common/Preloader/Preloader";
import {
    followAndUnfollow,
    setCurrentPage,
    setIsFollowingProgress,
    setLoadingMeaning,
    setTotalUsersCount,
    setUsers
} from "../../redux/UsersReducer";
import {getUsers} from "../../redux/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoadingMeaning(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setLoadingMeaning(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setCurrentPage(this.props.currentPage + 1)
        })
    }

    showMoreUsers = () => {
        this.props.setLoadingMeaning(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setLoadingMeaning(false)
            this.props.setUsers(data.items)
            this.props.setCurrentPage(this.props.currentPage + 1)
        })
    }

    render() {
        return (<>
                <Users
                    showMoreUsers={this.showMoreUsers}
                    users={this.props.users}
                    followAndUnfollow={this.props.followAndUnfollow}
                    setIsFollowingProgress={this.props.setIsFollowingProgress}
                    isFollowingProgress={this.props.isFollowingProgress}
                />
                {this.props.loading ? <Preloader/> : null
                }
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.Users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        loading: state.UsersPage.loading,
        isFollowingProgress: state.UsersPage.isFollowingProgress
    }
}

let mapDispatchToProps =
    {
        followAndUnfollow,
        setCurrentPage,
        setLoadingMeaning,
        setTotalUsersCount,
        setUsers,
        setIsFollowingProgress
    }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)