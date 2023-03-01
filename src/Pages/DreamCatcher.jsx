import React from 'react'
import { CarouselDreamCatcher } from '../components/Banner/CarouselDreamCatcher'
import { BtnFirst } from '../components/Button/BtnFirst'
import { NavDreamCatcher } from '../components/NavSecond/NavDreamCatcher'
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
        <p>Los atrapasueños constan de un aro firme en alambre grueso, hilo macramé 100% acrílico para su bordado y tejido, plumas artificiales de colores, cuentas o abalorios de diversas formas y colores dependiendo el diseño.</p>
      </section>

      <section className='secCategory'>
        <div >
          <h1>Filtros</h1>
        </div>
        <div>
          <NavDreamCatcher/>
        </div>
      </section>

    </div>
    
  )
}
