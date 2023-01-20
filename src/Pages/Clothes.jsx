import React from 'react'
import { CarouseClothes } from '../components/Banner/CarouseClothes'
import { BtnFirst } from '../components/Button/BtnFirst'
import { SocialMedia } from '../components/SocialMedia/SocialMedia'

export const Clothes = () => {
  return (
    <div className='divClothes'>
      <CarouseClothes/>
      <section className='secSocialMedia'>
        <SocialMedia />
        <div>
          <BtnFirst/>
        </div>
      </section>
      <section className='secHome'>
        <h1>Ropa</h1>
        <p>Crop tops, vestidos de baño, bolsos y gran variedad tejidos a crochet 100 % a mano con excelente calidad de hilo.</p>
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
