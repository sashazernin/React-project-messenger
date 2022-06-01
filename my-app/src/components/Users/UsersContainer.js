import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import * as axios from 'axios'
import Preloader from "../common/Preloader/Preloader";
import {
    followAndUnfollow,
    setCurrentPage,
    setLoadingMeaning,
    setTotalUsersCount,
    setUsers
} from "../../redux/UsersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {

            this.props.setLoadingMeaning(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                    this.props.setLoadingMeaning(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setCurrentPage(this.props.currentPage + 1)
            })
    }

    showMoreUsers = () => {
        this.props.setLoadingMeaning(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setLoadingMeaning(false)
            this.props.setUsers(response.data.items)
            this.props.setCurrentPage(this.props.currentPage + 1)
        })

    }

    render() {
        return (<>
                {this.props.loading ? <Preloader/> :
                    <Users
                        showMoreUsers={this.showMoreUsers}
                        users={this.props.users}
                        followAndUnfollow={this.props.followAndUnfollow}
                    />
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
        loading: state.UsersPage.loading
    }
}

let mapDispatchToProps =
    {
        followAndUnfollow,
        setCurrentPage,
        setLoadingMeaning,
        setTotalUsersCount,
        setUsers
    }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)