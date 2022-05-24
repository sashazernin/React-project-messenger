import React, {createRef} from 'react';
import {MessageTextChangeCreator, SendMessageCreator} from "../../redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        Messages: state.MessagesPage.Messages,
        MessageText: state.MessagesPage.MessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        SendMessage: () => {
            dispatch(SendMessageCreator())
        },
        MessageTextChange: (text) => {
            dispatch(MessageTextChangeCreator(text))
        }
    }
}

const SMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default SMessagesContainer;