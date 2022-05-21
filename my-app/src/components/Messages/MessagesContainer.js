import c from './Messages.module.css';
import React, {createRef} from 'react';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import {MessageTextChangeActionCreator, SendMessageActionCreator} from "../../redux/MessagesReducer";

const Messages = (props) => {

    let SendMessage = () => {
        props.Dispatch(SendMessageActionCreator())
    }

    let MessageTextChange = (e) => {
        props.Dispatch(MessageTextChangeActionCreator(e.target.value))
    }

    return (
        <Messages
            SendMessage = {SendMessageActionCreator}
            MessageTextChange = {props.Store.Dispatch(MessageTextChange)}
        />
    )
}
export default Messages;