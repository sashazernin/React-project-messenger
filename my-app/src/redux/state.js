let renderTree = () => {
    console.log('State changed');
}
let state = {
    Dialogs: [
        {id:"1", name:"Dmitry"},
        {id:"2", name:"Sasha"},
        {id:"3", name:"Timofey"}
    ],

    ProfilePage: {
        Posts: [
            {id: "1", message: "Hi", likes: "0"},
            {id: "2", message: "somebody is here?", likes: "2"},
            {id: "3", message: "why everyone don't like me?", likes: "0"},
            {id: "4", message: "uhh...", likes: "0"},
            {id: "5", message: "...", likes: "0"},
            {id: "6", message: "...", likes: "10"}
        ],
        PostText: ''
    },

    MessagePage: {
        Messages: [
            {id:"1",message:"Damir loh"},
            {id:"2",message:"soglasen?"},
            {id:"3",message:"che ignorish?"},
            {id:"4",message:"a ti i est damir"},
            {id:"5",message:"ti loh"},
        ],
        MessageText: ""
    }


}

window.state = state

export const AddPost = () => {
    let Post = {
        id: "1",
        message: state.ProfilePage.PostText,
        likes: "0"
    }
    state.ProfilePage.Posts.push(Post)
    state.ProfilePage.PostText = ""
    renderTree(state);
}

export const NewPostText = (text) => {
    state.ProfilePage.PostText = text
    renderTree(state);
}

export const SendMessage = () => {
    let Message = {
        id: "1",
        message:state.MessagePage.MessageText
    }
    state.MessagePage.Messages.push(Message)
    state.MessagePage.MessageText = ""
    renderTree(state)
}

export const MessageTextChange = (text) => {
    state.MessagePage.MessageText = text
    renderTree(state)
}

export const Subscribe = (observer) => {
    renderTree = observer;
}


export default state;