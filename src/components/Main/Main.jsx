import React from 'react'
import css from "./Main.module.css"
import MaayaS from "../../assets/maayasilk.svg"
import MaayaR from "../../assets/maayaraw.svg"

const Main = () => {
  return (
    <div className={css.container} id='home'>
        <div className={css.wrap}>
            <div className={css.wrap1}>

                <div className={css.contain}>
                    <div className={css.box}>
                        <img src={MaayaS} alt="" />
                    </div>
                    <div className={css.animation}>
     <span>  Jewellery for every occasion </span> 
     <span>Return Gifts</span>
     <span> Party wear bangles</span>
     <span>Bridal packages</span>
     <span>Bulk orders accepted</span>
     <span>View Store</span>

                    </div>
                    <button className={css.vsbtn}>View store</button>
                </div>

            </div>

 
            <div className={css.wrap2}>

            <div className={css.contain}>
                    <div className={css.box}>
                        <img src={MaayaR} alt="" />
                    </div>
                    <div className={css.animation2}>
                        <div className={css.aleft}>
                            <span>Kundan stones(All types)</span>
                            <span>Bangles</span>
                            <span>Thread,Glue</span>
                            <span>Sugar</span>
                            <span>Tube beads</span>
                            <span>Hair clips</span>
                        </div>
                        <div className={css.aright}>
                            <span>Packing plastic box</span>
                            <span>Partition boxes</span>
                            <span>Wrapped bangles</span>
                            <span>Stone chain</span>
                            <span>Pearl chain</span>
                            <span>Saree pin</span>
                        </div>
                    </div>
                    <button className={css.vsbtn}>View store</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Main
