import c from './Messages.module.css';
import React, {createRef} from 'react';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";

const Messages = (props) => {
    let MessagesCount = props.Messages.map(m => <Message key={m.id} message={m.message}/>)

    let SendMessage = () => {
        props.SendMessage()
    }

    let MessageTextChange = (e) => {
        props.MessageTextChange(e.target.value)
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