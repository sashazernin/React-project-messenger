const Send_Message = 'Send_Message'
const Message_Text = 'Message_Text'

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
        case Send_Message: {
            return {
                ...state,
                Messages: [...state.Messages, {id: '1', message: state.MessageText}],
                MessageText: ""
            }
        }
        case Message_Text: {
            return {
                ...state,
                MessageText: action.text
            }
        }
        default: return state
    }
}

export const SendMessage = () => {
    return{
        type:Send_Message
    }
}

export const MessageTextChange = (text) => {
    return{
        type:Message_Text,text: text
    }
}

export default MessagesReducer