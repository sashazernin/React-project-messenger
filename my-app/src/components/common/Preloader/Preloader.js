import React from "react";
import preloader from "../../../imgs/preloader.gif";
import c from "./Preloader.module.css"

let Preloader = (props) => {
    return(
        <div className={c.content}>
            <div className={c.background}>
                <img className={c.img} src={preloader}/>
            </div>
        </div>
    )
}

export default Preloader