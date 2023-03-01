import React from 'react'
import { CarouselAccesories } from '../components/Banner/CarouselAccesories'
import { BtnFirst } from '../components/Button/BtnFirst'
import { NavAccesories } from '../components/NavSecond/NavAccesories'
import { SocialMedia } from '../components/SocialMedia/SocialMedia'

export const Accesories = () => {
  return (
    <div className='divAccesories'>
      <CarouselAccesories />
      <section className='secSocialMedia'>
        <SocialMedia />
        <div>
          <BtnFirst />
        </div>
      </section>
      <section className='secHome'>
        <h1>Accesorios</h1>
        <p>Accesorios en porcelanicrón, foamy moldeable y bisutería en mostacillas. Los aretes y pulseras son realizados en porcelana fría y esmaltados para hacer más duraderas las piezas, también se realizan accesorios con mostacilla, cuentas y dijes de metal plateado tibetano.</p>
      </section>

      <section className='secCategory'>
        <div >
          <h1>Filtros</h1>
        </div>
        <NavAccesories/>
      </section>

    </div>
  )
}
