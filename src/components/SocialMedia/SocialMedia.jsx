import React from 'react'
import Instagram from '../../assets/icon/Instagram.png'
import Whatsapp from '../../assets/icon/Whatsapp.png'
import styleCss from "./SocialMedia.module.css"

export const SocialMedia = () => {
    
    return (
        <div className={styleCss.netWork}>
            <a href="https://www.instagram.com/happy.butterflyyyy/" target= "_blank">
                <img src={Instagram} alt="" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=573046791610" target= "_blank">
                <img src={Whatsapp} alt="" />
            </a>
        </div>
    )
}
