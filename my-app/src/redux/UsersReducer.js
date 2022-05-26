let follow = "follow"
let unfollow = "unfollow"
let setUsers = "setUsers"
let setCurrentPage = "setCurrentPage"
let setTotalUsersCount = "setTotalUsersCount"

let InitialState = {
    Users: [],
    pageSize:10,
    totalUsersCount: 0,
    currentPage: 1
}

const UsersReducer = (state = InitialState, action) => {

    switch (action.type){
        case follow: {
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    else{
                        return u
                    }
                })
            }
        }
        case unfollow: {

            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    else{
                        return u
                    }
                })
            }
        }
        case setUsers: {
            return{
                ...state,
                Users: [...state.Users,...action.users]
            }
        }
        case setCurrentPage: {
            return{
                ...state,
                currentPage: action.currentPage
            }
        }
        case setTotalUsersCount: {
            return{
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default : return state
    }
}

export const followAC = (userId) => {
    return {
        type: follow,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: unfollow,
        userId
    }
}

export const setUsersAC = (users) => {
    return{
        type: setUsers,
        users
    }
}

export const setCurrentPageAC = (currentPage) => {
    return{
        type: setCurrentPage,
        currentPage
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: setTotalUsersCount,
        totalUsersCount
    }
}

export default UsersReducer