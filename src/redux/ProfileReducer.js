import {getProfileInfo} from "./api";
import {ProfileAPI} from "./api";

const post_Text = 'post_Text'
const add_Post = 'add_Post'
const Set_User_Profile = 'Set_Users_Profile'
const Get_Status = 'Get_Status'
const Update_Status = 'Update_Status'
const Update_Photo = 'Update_Photo'
const Is_Saving_Progress = 'Is_Saving_Progress'

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
    status: "",
    isSavingProgress: false
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
        case Update_Photo: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case Is_Saving_Progress: {
            return {
                ...state,
                isSavingProgress: action.isSavingProgress
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
export const updatePhoto = (photos) => {
    return {
        type: Update_Photo,
        photos
    }
}

export const switchIsSavingProgress = (isSavingProgress) => {
    return {
        type: Is_Saving_Progress,
        isSavingProgress
    }
}

export const getProfileInfoTC = (id) => async dispatch => {
    try {
        const response = await getProfileInfo(id)
        dispatch(setUserProfile(response.data))
    } catch (error) {
        alert('server error')
    }
}

export const getProfileStatusTC = (status) => async dispatch => {
    try {
        const response = await ProfileAPI.getStatus(status)
        dispatch(getStatus(response.data))
    } catch (error) {
        alert('server error')
    }
}

export const updateProfileStatusTC = (status) => async dispatch => {
    try {
        const response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(updateStatus(status))
        }
    } catch (error) {
        alert('server error')
    }
}
export const updateProfilePhotoTC = (image) => async dispatch => {
    try {
        const response = await ProfileAPI.updatePhoto(image)
        if (response.data.resultCode === 0) {
            dispatch(updatePhoto(response.data.data.photos))
        }
    } catch (error) {
        alert('server error')
    }
}
export const updateProfileTC = (ProfileInfo) => async dispatch => {
    dispatch(switchIsSavingProgress(true))
    try {
        const response = await ProfileAPI.updateProfile(ProfileInfo)
        if (response.data.resultCode === 0) {
            alert('update status error')
        }
    } catch (error) {
        alert('server error')
    }
}

export default ProfileReducer