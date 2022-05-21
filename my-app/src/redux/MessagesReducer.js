const SendMessage = 'SendMessage'
const MessageText = 'MessageText'

let InitialState = {
    Messages: [
        {id:"1",message:"Damir loh"},
        {id:"2",message:"soglasen?"},
        {id:"3",message:"che ignorish?"},
        {id:"4",message:"a ti i est damir"},
        {id:"5",message:"ti loh"},
    ],
        MessageText: ""
}

const MessagesReducer = (State = InitialState, Action) => {

    switch (Action.type) {
        case SendMessage:
            let Message = {
                id: "1",
                message: State.MessageText
            }
            State.Messages.push(Message)
            State.MessageText = ""
            break
        case MessageText:
            State.MessageText = Action.text
            break
    }
    return State
}

export const SendMessageActionCreator = () => {
    return{
        type:SendMessage
    }
}

export const MessageTextChangeActionCreator = (text) => {
    return{

        type:MessageText,text: text
    }
}

export default MessagesReducer