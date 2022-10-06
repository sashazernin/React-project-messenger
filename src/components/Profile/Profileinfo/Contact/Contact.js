import React from "react";
import c from "./Contact.module.css"
import {Link, NavLink, Route} from "react-router-dom";

const Contact = (props) => {
    console.log(props.contact)
    return(
        <div>
            {props.contact ?
                <div className={c.item}>
                    <a className={c.background} href={props.contact}>
                        <img className={c.image} src={props.image}/>
                    </a>
                </div>
                :null
            }
        </div>
    )
}

export default Contact