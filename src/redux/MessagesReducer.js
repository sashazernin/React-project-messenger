import message from "../components/Messages/Message/Message";

const Send_Message = 'Send_Message'
const Message_Text = 'Message_Text'

let InitialState = {
    Messages: [
        {id:"1",message:"Hi"},
        {id:"2",message:"How are you?"}
    ],
        MessageText: ""
}

const MessagesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case Send_Message: {
            let message = state.MessageText.trim()
            if(message.length) {
                return {
                    ...state,
                    Messages: [...state.Messages, {id: '1', message: state.MessageText}],
                    MessageText: ""
                }
            }else{
                return{
                    ...state
                }
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