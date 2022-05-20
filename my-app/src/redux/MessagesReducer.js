const SendMessage = 'SendMessage'
const MessageText = 'MessageText'
export const MessagesReducer = (State, Action) => {
    switch (Action) {
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