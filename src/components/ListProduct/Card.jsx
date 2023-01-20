import React from 'react'
import styleCard from "./Card.module.css"

export const Card = (props) => {
    const { lista: { id, filter, url, price } } = props;

    return (
        <div className={styleCard.containerCard}>
            <div >
                <img src={url} />
            </div>
            <div >
                <h3>{price}</h3>
                <button>
                    <h1>Añadir al carrito</h1>
                </button>
            </div>
        </div>
    )
}
