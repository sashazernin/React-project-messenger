import c from './Messages.module.css';
import React, {createRef} from 'react';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
const Messages = (props) => {
    let MessagesCount = props.Messages.map( m => <Message id={m.id} message={m.message}/> )

    let MessageText = React.createRef()

    let SendMessage = () => {
        props.Dispatch({type:"SendMessage"})
    }

    let MessageTextChange = () => {
        props.Dispatch({type:"MessageTextChange",text: MessageText.current.value})
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