import React from 'react'
import css from "./Contact.module.css"
import Cinsta from "../../assets/cinsta.svg"
import CWhatsapp from "../../assets/cwhatsapp.svg"
import Qr1 from "../../assets/qr1.svg"

const Contact = () => {
  return (
    <div className={css.container} id='contact'>

        <div className={css.wrap}>

       <div className={css.div1}> 
       <span>Contact</span>
       </div>

       <div className={css.div2}>

        {/* silk */}
        <div className={css.ms}>
            <div className={css.mshead}>
                <span>Maaya - silk thread jewellery</span>
            </div>

            <div className={css.mscontent}>
                <div className={css.contentleft}>
                   <div className={css.social1}>
                    <img src={Cinsta} alt="" />
                    <span>maaya_silkthread_jewellery</span>
                   </div>
                   <div className={css.social2}>
                    <img src={CWhatsapp} alt="" />
                    <span>7550315658</span>
                   </div>
                 
                </div>
                <div className={css.contentright}>
                <img src={Qr1} alt="" />
                </div>
            </div>
        </div>



{/* raw */}
<div className={css.ms}>
            <div className={css.mshead}>
                <span>Maaya - Raw materials</span>
            </div>

            <div className={css.mscontent}>
                <div className={css.contentleft}>
                   <div className={css.social1}>
                    <img src={Cinsta} alt="" />
                    <span>maayas_rawmaterials</span>
                   </div>
                   <div className={css.social2}>
                    <img src={CWhatsapp} alt="" />
                    <span>7550315658</span>
                   </div>
                 
                </div>
                <div className={css.contentright}>
                <img src={Qr1} alt="" />
                </div>
            </div>
        </div>






       </div>


        </div>
      
    </div>
  )
}

export default Contact
