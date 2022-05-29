const post_Text = 'post_Text'
const add_Post = 'add_Post'
const Set_User_Profile = 'Set_Users_Profile'

let InitialState = {
    Posts: [
        {id: "1", message: "Hi", likes: "0"},
        {id: "2", message: "somebody is here?", likes: "2"},
        {id: "3", message: "why everyone don't like me?", likes: "0"},
        {id: "4", message: "uhh...", likes: "0"},
        {id: "5", message: "...", likes: "0"},
        {id: "6", message: "...", likes: "10"}
    ],
    PostText: 'Текст Поста ',
    profile: null
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
        type: post_Text, text: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: Set_User_Profile,
        profile
    }
}

export default ProfileReducer