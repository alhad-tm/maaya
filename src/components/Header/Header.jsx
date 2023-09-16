import React, { useState } from 'react'
import css from "./Header.module.css"

import Maaya from "../../assets/maaya.svg"
import Whatsapp from "../../assets/whatsapp.svg"
import Bars from "../../assets/Bars.svg"
import Close from "../../assets/close.png"
import { Link } from 'react-scroll'


const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false); 
  return (
    <div className={css.container}>
        <div className={css.wrap}>
            <div className={css.wrapleft}>
             <img src={Maaya} alt="" />
            </div>
            <div className={css.wrapright}>

            {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img className={css.bars}
            src={Bars}
            alt=""
           
          />
        </div>
        ) : (




                <ul className={css.rightlist}  onClick={()=>setMenuOpened(false)}>
                      {mobile? <div className={css.main}>
          <div className={css.m1}> <img src={Maaya} alt="" />  </div>
          <div className={css.m2}> <img src={Close} alt="" /></div>
           </div>:""}
               <Link onClick={()=>setMenuOpened(false)} to="home" smooth={true}>  <li>Home</li> </Link>    
               <Link onClick={()=>setMenuOpened(false)} to="about" smooth={true}>  <li>About</li> </Link>    
               <Link onClick={()=>setMenuOpened(false)} to="contact" smooth={true}>  <li>Contact</li> </Link>    
                   
                    <img src={Whatsapp} alt="" />
                </ul>)}
            </div>
        </div>
      
    </div>
  )
}

export default Header
