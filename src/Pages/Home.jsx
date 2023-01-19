import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselHome } from '../components/Banner/CarouselHome';
import { BtnFirst } from '../components/Button/BtnFirst';
import { SocialMedia } from '../components/SocialMedia/SocialMedia';

export const Home = () => {
  return (
    <div className='divHome'>
      <CarouselHome />
      <section className='secSocialMedia'>
        <SocialMedia />
        <div>
          <BtnFirst />
        </div>
      </section>
      <section className='secHome'>
        <h1>¿QUIENES SOMOS?</h1>
        <p>"Emprendimiento dedicado a la creación de productos elaborados 100% a mano de diversos materiales y acabados de excelente calidad. Los productos se fabrican bajo pedido y con opción de personalización, su precio varía  según tamaños y detalles."</p>
      </section>
      <section className='secCategory'>
        <div className='divTitleCategory'>
          <h1>CATEGORIAS</h1>
        </div>
        <div>
          
        </div>
      </section>

    </div>

  )
}
