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
        MessageText: "Текст Сообщения"
}

const MessagesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SendMessage: {
            return {
                ...state,
                Messages: [...state.Messages, {id: '1', message: state.MessageText}],
                MessageText: ""
            }
        }
        case MessageText: {
            return {
                ...state,
                MessageText: action.text
            }
        }
        default: return state
    }
}

export const SendMessageCreator = () => {
    return{
        type:SendMessage
    }
}

export const MessageTextChangeCreator = (text) => {
    return{
        type:MessageText,text: text
    }
}

export default MessagesReducer