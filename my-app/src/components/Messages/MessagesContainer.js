import React, {createRef} from 'react';
import {MessageTextChange, SendMessage} from "../../redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return{
        Messages: state.MessagesPage.Messages,
        MessageText: state.MessagesPage.MessageText,
    }
}

let mapDispatchToProps = {
    SendMessage,
    MessageTextChange
}

export default connect(mapStateToProps,mapDispatchToProps)(Messages)