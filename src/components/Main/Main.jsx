import React from 'react'
import css from "./Main.module.css"
import MaayaS from "../../assets/maayasilk.svg"
import MaayaR from "../../assets/maayaraw.svg"

const Main = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>
            <div className={css.wrap1}>

                <div className={css.contain}>
                    <div className={css.box}>
                        <img src={MaayaS} alt="" />
                    </div>
                    <button className={css.vsbtn}>View store</button>
                </div>

            </div>


            <div className={css.wrap2}>

            <div className={css.contain}>
                    <div className={css.box}>
                        <img src={MaayaS} alt="" />
                    </div>
                    <button className={css.vsbtn}>View store</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Main
