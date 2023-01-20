import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styleBannerCss from "./Banner.module.css"
import ph1 from "../../assets/img/amigurumis/1.jpeg";
import ph2 from "../../assets/img/amigurumis/2.jpeg";
import ph3 from "../../assets/img/amigurumis/3.jpeg";
import ph4 from "../../assets/img/amigurumis/4.jpeg";
import ph5 from "../../assets/img/amigurumis/5.jpeg";
import ph6 from "../../assets/img/amigurumis/6.jpeg";
import ph7 from "../../assets/img/amigurumis/7.jpeg";
import ph8 from "../../assets/img/amigurumis/8.jpeg";
import ph9 from "../../assets/img/amigurumis/9.jpeg";
import ph10 from "../../assets/img/amigurumis/10.jpeg";
import ph12 from "../../assets/img/amigurumis/12.jpeg";
import ph13 from "../../assets/img/amigurumis/13.jpeg";

export const CarouselAmigurumis = () => {
    return (
        <Carousel autoPlay>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph1} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph2} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph3} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph4} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph5} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph6} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph7} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph8} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph9} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph10} />
            </div>

            <div className={styleBannerCss.photo}>
                <img alt="" src={ph12} />
            </div>
            <div className={styleBannerCss.photo}>
                <img alt="" src={ph13} />
            </div>
        </Carousel>
    )
}
