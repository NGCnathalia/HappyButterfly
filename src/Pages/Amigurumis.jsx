import React from 'react'
import { CarouselAmigurumis } from '../components/Banner/CarouselAmigurumis'
import { BtnFirst } from '../components/Button/BtnFirst'
import { NavAmigurumis } from '../components/NavSecond/NavAmigurumis'
import { SocialMedia } from '../components/SocialMedia/SocialMedia'

export const Amigurumis = () => {
  return (
    <div className='divAmigurumis'>
      <CarouselAmigurumis/>
      <section className='secSocialMedia'>
        <SocialMedia />
        <div>
          <BtnFirst/>
        </div>
      </section>
      <section className='secHome'>
        <h1>Amigurumis</h1>
        <p>Un acrónimo en japonés, compuesto de: ami, "tejido", y nuigurumi, "muñeco de peluche" es una tendencia o moda japonesa que consiste en tejer pequeños muñecos mediante técnicas de croché o ganchillo. La elaboración de los amigurumis consta de hilo macramé 100% acrílico, ya que da un toque firme al tejido y a tu amigurumi, su relleno es poliester, de modo que sea más fácil a la hora de lavado. </p>
      </section>
      
      <section className='secCategory'>
        <div >
          <h1>Filtros</h1>
        </div>
        <div>
          <NavAmigurumis/>
        </div>
      </section>

    </div>
  )
}
