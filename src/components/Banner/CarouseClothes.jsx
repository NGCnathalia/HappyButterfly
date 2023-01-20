import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styleBannerCss from "./Banner.module.css"
import ph1 from "../../assets/img/clothes/1.jpeg";
import ph2 from "../../assets/img/clothes/2.jpeg";
import ph3 from "../../assets/img/clothes/3.jpeg";
import ph4 from "../../assets/img/clothes/4.jpeg";
import ph5 from "../../assets/img/clothes/5.jpeg";


export const CarouseClothes = () => {
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
          
          </Carousel>
      )
}
