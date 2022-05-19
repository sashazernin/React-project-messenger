import c from './Massages.module.css';
import React from 'react';
import {NavLink} from "react-router-dom";
import Massage from "./Massage/Massage";
const Massages = (props) => {
    let MassagesCount = props.Massages.map( m => <Massage id={m.id} massage={m.massage}/> )

    let newmassageel = React.createRef();

    let newmassage = () => {
        alert(newmassageel.current.value)
    }

  return(
      <div>
          {MassagesCount}
          <textarea ref={newmassageel}></textarea>
          <button onClick={newmassage}>Send</button>
      </div>
  )
}
export default Massages;