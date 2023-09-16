import React from 'react'
import css from "./Header.module.css"

import Maaya from "../../assets/maaya.svg"
import Whatsapp from "../../assets/whatsapp.svg"


const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>
            <div className={css.wrapleft}>
             <img src={Maaya} alt="" />
            </div>
            <div className={css.wrapright}>
                <ul className={css.rightlist}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <img src={Whatsapp} alt="" />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Header
