let store = {
    _state: {
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
    },

    GetState(){
        return this._state;
    },

    _CallSubscriber(){
        console.log('State changed');
    },

    Subscribe(observer){
        this._CallSubscriber = observer;
    },

    Dispatch(action){
        if(action.type === "AddPost"){
            let Post = {
                id: "1",
                message: this._state.ProfilePage.PostText,
                likes: "0"
            }
            this._state.ProfilePage.Posts.push(Post)
            this._state.ProfilePage.PostText = ""
            this._CallSubscriber(this._state);
        }
        if(action.type === "PostText"){
            this._state.ProfilePage.PostText = action.text
            this._CallSubscriber(this._state);
        }
        if(action.type === "SendMessage"){
            let Message = {
                id: "1",
                message:this._state.MessagePage.MessageText
            }
            this._state.MessagePage.Messages.push(Message)
            this._state.MessagePage.MessageText = ""
            this._CallSubscriber(this._state)
        }
        if(action.type === "MessageTextChange"){
            this._state.MessagePage.MessageText = action.text
            this._CallSubscriber(this._state)
        }
    }
}
export default store;