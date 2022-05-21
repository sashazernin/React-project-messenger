import c from './Messages.module.css';
import React, {createRef} from 'react';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import {MessageTextChangeActionCreator, SendMessageActionCreator} from "../../redux/MessagesReducer";

const Messages = (props) => {

    let MessagesCount = props.Messages.map(m => <Message id={m.id} message={m.message}/>)

    let SendMessage = () => {
        props.dispatch(SendMessageActionCreator())
    }

    let MessageTextChange = (e) => {
        props.dispatch(MessageTextChangeActionCreator(e.target.value))
    }

    return (
        <div>
            {MessagesCount}
            <textarea placeholder={"Введите сообщение"} value={props.MessageText} onChange={MessageTextChange}/>
            <button onClick={SendMessage}>Send</button>
        </div>
    )
}
export default Messages;