import c from './Dialogs.module.css';
import React from 'react';
import Dialog from "./Dialog/Dialog";
const Dialogs = (props) => {
    let DialogsCount = props.dialogs.map( d => <Dialog name={d.name} key={d.id} id={d.id}/> )

  return(
      <div>
          {DialogsCount}
      </div> )
}
export default Dialogs;