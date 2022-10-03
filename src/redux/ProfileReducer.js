import {getProfileInfo} from "./api";
import {ProfileAPI} from "./api";

const post_Text = 'post_Text'
const add_Post = 'add_Post'
const Set_User_Profile = 'Set_Users_Profile'
const Get_Status = 'Get_Status'
const Update_Status = 'Update_Status'

let InitialState = {
    Posts: [
        {id: "1", message: "Hi", likes: "0"},
        {id: "2", message: "somebody is here?", likes: "2"},
        {id: "3", message: "why everyone don't like me?", likes: "0"},
        {id: "4", message: "uhh...", likes: "0"},
        {id: "5", message: "...", likes: "0"},
        {id: "6", message: "...", likes: "10"}
    ],
    PostText: '',
    profile: null,
    status: ""
}

const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case add_Post: {
            return {
                ...state,
                Posts: [...state.Posts, {id: "1", message: state.PostText, likes: "0"}],
                PostText: ""
            }
        }
        case post_Text: {
            return {
                ...state,
                PostText: action.text
            }
        }
        case Set_User_Profile: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case Get_Status: {
            return {
                ...state,
                status: action.status
            }
        }
        case Update_Status: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: add_Post
    }
}

export const postText = (text) => {
    return {
        type: post_Text,
        text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: Set_User_Profile,
        profile
    }
}

export const getStatus = (status) => {
    return {
        type: Get_Status,
        status
    }
}

export const updateStatus = (status) => {
    return {
        type: Update_Status,
        status
    }
}

export const getProfileInfoTC = (id) => {
    return (dispatch) => {
        getProfileInfo(id).then(
            data => {
                dispatch(setUserProfile(data))
            }
        )
    }
}

export const getProfileStatusTC = (status) => {
    return (dispatch) => {
        ProfileAPI.getStatus(status).then(
            data => {
                dispatch(getStatus(data))
            }
        )
    }
}

export const updateProfileStatusTC = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(
            data => {
                if(data.resultCode == 0) {
                    dispatch(updateStatus(status))
                }
            }
        )
    }
}

export default ProfileReducer