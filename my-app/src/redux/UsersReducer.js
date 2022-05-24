let follow = "follow"
let unfollow = "unfollow"
let setUsers = "setUsers"

let InitialState = {
    Users: [
    ]
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
            alert('l')
            return{
                ...state,
                Users: [...state.Users, ...action.users]
            }
        }
        default: return state
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

export default UsersReducer