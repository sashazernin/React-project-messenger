const PostText = 'PostText'
const AddPost = 'AddPost'
const ProfileReducer = (State, Action) => {
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