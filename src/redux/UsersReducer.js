import {follow, getUsers, unfollow} from "./api";

let follow_And_Unfollow = 'followAndUnfollow'
let set_Users = 'set_Users'
let set_Current_Page = 'set_Current_Page'
let set_Total_Users_Count = 'set_Total_Users_Count'
let show_Or_Hide_Loading = 'show_Or_Hide_Loading'
let isFollowingProgress = 'toggleIsFollowingProgress'

let InitialState = {
    Users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    loading: false,
    isFollowingProgress: []
}

const UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case follow_And_Unfollow: {
            return {
                ...state,
                Users: state.Users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: action.followed}
                    } else {
                        return u
                    }
                })
            }
        }
        case set_Users: {
            return {
                ...state,
                Users: [...state.Users, ...action.users]
            }
        }
        case set_Current_Page: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case set_Total_Users_Count: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case show_Or_Hide_Loading: {
            return {
                ...state,
                loading: action.meaning
            }
        }
        case isFollowingProgress: {
            return {
                ...state,
                isFollowingProgress: action.progressMeaning ?
                    [...state.isFollowingProgress, action.userId] :
                    [...state.isFollowingProgress.filter(id => id != action.userId)]
            }
        }
        default :
            return state
    }
}

export const followAndUnfollow = (userId, followed) => {
    return {
        type: follow_And_Unfollow,
        userId,
        followed
    }
}

export const setUsers = (users) => {
    return {
        type: set_Users,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: set_Current_Page,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: set_Total_Users_Count,
        totalUsersCount
    }
}

export const setLoadingMeaning = (meaning) => {
    return {
        type: show_Or_Hide_Loading,
        meaning
    }
}

export const setIsFollowingProgress = (progressMeaning, userId) => {
    return {
        type: isFollowingProgress,
        progressMeaning,
        userId
    }
}

export const getUsersTC = (currentPage, pageSize) => async dispatch => {
    dispatch(setLoadingMeaning(true))
    const response = await getUsers(currentPage, pageSize)
    dispatch(setLoadingMeaning(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
    dispatch(setCurrentPage(currentPage + 1))
}

export const followAndUnfollowTC = (followed, id) => {
    if (followed) {
        return async dispatch => {
            dispatch(setIsFollowingProgress(true, id))
            const response = await unfollow(id)
            if (response.data.resultCode === 0) {
                dispatch(followAndUnfollow(id, !followed))
            }
            dispatch(setIsFollowingProgress(false, id))
        }
    } else {
        return async dispatch => {
            dispatch(setIsFollowingProgress(true, id))
            const response = await follow(id)
            if (response.data.resultCode === 0) {
                dispatch(followAndUnfollow(id, !followed))
            }
            dispatch(setIsFollowingProgress(false, id))
        }
    }
}

export default UsersReducer