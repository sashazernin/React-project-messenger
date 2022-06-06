import c from './Dialogs.module.css';
import React from 'react';
import Dialog from "./Dialog/Dialog";
import {Navigate} from "react-router-dom";
const Dialogs = (props) => {
    if(!props.isAuth){ return (<Navigate to={"/Login"}/>)}
    let DialogsCount = props.dialogs.map( d => <Dialog name={d.name} key={d.id} id={d.id}/> )

  return(
      <div>
          {DialogsCount}
      </div> )
}
export default Dialogs;