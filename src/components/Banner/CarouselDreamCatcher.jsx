import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styleBannerCss from "./Banner.module.css"
import ph1 from "../../assets/img/dreamCatcher/1.jpeg";
import ph2 from "../../assets/img/dreamCatcher/2.jpeg";
import ph3 from "../../assets/img/dreamCatcher/3.jpeg";

export const CarouselDreamCatcher = () => {
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
            
          </Carousel>
      )
}
