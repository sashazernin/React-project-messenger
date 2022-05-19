import c from './Profileinfo.module.css';
import React from 'react';
const Profileinfo = () => {
  return(
      <div className={c.content}>
        <div className={c.info}>
          <div>
            <img className={c.logo} src='https://mobimg.b-cdn.net/v3/fetch/4d/4d2390706bd5bb1daffe41e00f89d640.jpeg'></img>
          </div>
          <div className={c.info__text_block}>
            <span className={c.info__text_block__name}>
              Dmitry K.
            </span>
            <span>
              Date of Birth: 2 jan
            </span>
            <span>
              Education: BSU
            </span>
            <span>
              description: Damir loh
            </span>
          </div>
        </div>
      </div>
  )
}
export default Profileinfo;