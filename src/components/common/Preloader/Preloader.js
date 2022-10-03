import React from "react";
import preloader from "../../../imgs/preloader.gif";
import c from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={c.content}>
            <img className={c.img} src={preloader}/>
        </div>
    )
}

export default Preloader