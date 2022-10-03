import c from './Messages.module.css';
import React, {createRef} from 'react';
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
            {props.Messages.map(m => <Message key={m.id} message={m.message}/>)}
            <div className={c.sendMessageContent}>
                <textarea placeholder={"Введите сообщение"} value={props.MessageText} onChange={MessageTextChange}/>
                <button onClick={SendMessage}  class={c.sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Messages;