import React from 'react'
import styleCss from "./BtnFirst.module.css"

export const BtnFirst = () => {
  const mensaje="Buen día, me encuentro interesad@ en cotizar sus servicios"
  const url= `https://api.whatsapp.com/send?phone=573046791610&text=${encodeURIComponent(mensaje)}`

  return (
    <button className={styleCss.btnFirst}>
        <a href={url} target="_blank">Cotiza</a>
    </button>
    )
}
