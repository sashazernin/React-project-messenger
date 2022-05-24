const PostText = 'PostText'
const AddPost = 'AddPost'

let InitialState = {
        Posts: [
            {id: "1", message: "Hi", likes: "0"},
            {id: "2", message: "somebody is here?", likes: "2"},
            {id: "3", message: "why everyone don't like me?", likes: "0"},
            {id: "4", message: "uhh...", likes: "0"},
            {id: "5", message: "...", likes: "0"},
            {id: "6", message: "...", likes: "10"}
        ],
        PostText: 'Текст Поста '
}

const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AddPost: {
            return{
                ...state,
                Posts: [...state.Posts, {id: "1", message: state.PostText, likes: "0"}],
                PostText: ""
            }
        }
        case PostText: {
            return {
                ...state,
                PostText: action.text
            }
        }
        default: return state
    }
}

export const AddPostCreator = () => {
    return{
        type: AddPost
    }
}

export const NewPostTextCreator = (text) => {
    return{
        type:PostText,text:text
    }
}

export default ProfileReducer