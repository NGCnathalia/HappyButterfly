import React from 'react'
import { CarouselDreamCatcher } from '../components/Banner/CarouselDreamCatcher'
import { BtnFirst } from '../components/Button/BtnFirst'
import { SocialMedia } from '../components/SocialMedia/SocialMedia'

export const DreamCatcher = () => {
  return (
    <div className='divDreamCatcher'>
      <CarouselDreamCatcher/>
      <section className='secSocialMedia'>
        <SocialMedia />
        <div>
          <BtnFirst/>
        </div>
      </section>
      <section className='secHome'>
        <h1>Atrapasueños</h1>
        <p>Mis productos son amigurumis, crop tops, bolsos y gran variedad tejidos a crochet 100 % a mano con excelente calidad de hilo, accesorios en porcelanicrón, foamy moldeable y bisutería en mostacillas</p>
      </section>

      <section className='secCategory'>
        <div >
          <h1>Filtros</h1>
        </div>
        <div>
          
        </div>
      </section>

    </div>
    
  )
}
