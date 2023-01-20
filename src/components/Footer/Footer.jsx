import React from 'react'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import styleCssFooter from "./Footer.module.css"
import logo from "../../assets/icon/logo.jpeg"
import locate from "../../assets/icon/locate.png"

export const Footer = () => {
    return (
        <footer className={styleCssFooter.containerFooter}>
            <div className={styleCssFooter.containerLogo}>
                <img src={logo} alt="logo" />
                <h5 className='nameShop'>Happy Butterfly</h5>
            </div>
            <SocialMedia />
            <div> 
                <img src={locate} alt="ubicacion" />
                <h6>Cachipay, Cundinamarca.</h6>
            </div>
            <a  href="https://github.com/NGCnathalia" target="_blank">@Create By Nathalia Garcia </a>
        </footer>
    )
}
