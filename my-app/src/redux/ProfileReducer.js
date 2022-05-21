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
        PostText: ''
}

const ProfileReducer = (State = InitialState, Action) => {
    switch (Action.type) {
        case
        AddPost:
            let Post = {
                id: "1",
                message: State.PostText,
                likes: "0"
            }
            State.Posts.push(Post)
            State.PostText = "";
            break;
        case
        PostText:
            State.PostText = Action.text;
            break;
    }
    return State
}

export const AddPostActionCreator = () => {
    return{
        type: AddPost
    }
}

export const NewPostTextActionCreator = (text) => {
    return{
        type:PostText,text:text
    }
}

export default ProfileReducer