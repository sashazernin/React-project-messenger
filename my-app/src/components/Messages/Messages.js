import c from './Messages.module.css';
import React, {createRef} from 'react';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
const Messages = (props) => {
    let MessagesCount = props.Messages.map( m => <Message id={m.id} message={m.message}/> )

    let MessageText = React.createRef()

    let SendMessage = () => {
        props.SendMessage()
    }

    let MessageTextChange = () => {
        props.MessageTextChange(MessageText.current.value)
    }

  return(
      <div>
          {MessagesCount}
          <textarea ref={MessageText} value={props.MessageText} onChange={MessageTextChange}/>
          <button onClick={SendMessage}>Send</button>
      </div>
  )
}
export default Messages;