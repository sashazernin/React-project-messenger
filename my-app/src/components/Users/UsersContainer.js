import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    followAndUnfollow,
    followAndUnfollowTC,
    getUsersTC,
    setIsFollowingProgress,
} from "../../redux/UsersReducer";
import {Navigate} from "react-router-dom";

class UsersContainer extends React.Component {
    componentDidMount() {
        if(this.props.isAuth) {
            this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
            // this.props.setLoadingMeaning(true)
            // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            //     this.props.setLoadingMeaning(false)
            //     this.props.setUsers(data.items)
            //     this.props.setTotalUsersCount(data.totalCount)
            //     this.props.setCurrentPage(this.props.currentPage + 1)
            // })
        }
    }

    showMoreUsers = () => {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return (<>
                <Users
                    showMoreUsers={this.showMoreUsers}
                    users={this.props.users}
                    followAndUnfollow={this.props.followAndUnfollowTC}
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
        isAuth: state.auth.isAuth,
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
        setIsFollowingProgress,
        getUsersTC,
        followAndUnfollowTC
    }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)