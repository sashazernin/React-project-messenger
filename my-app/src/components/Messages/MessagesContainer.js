import React, {createRef} from 'react';
import {MessageTextChange, SendMessage} from "../../redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        Messages: state.MessagesPage.Messages,
        MessageText: state.MessagesPage.MessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    SendMessage,
    MessageTextChange
}

const SMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default SMessagesContainer;