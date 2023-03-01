import React from 'react'
import styleCard from "./Card.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasks/tasksSlice';
import Swal from 'sweetalert2';

export const Card = (props) => {
    const { lista: { id, filter, url, price } } = props;
    const dispatch = useDispatch();

    const [card, setCard] = useState({
        id: id,
        filter: filter,
        url: url,
        price: price,
        count: 1,
        subTotal: price,    
})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(card)
        dispatch(addTask(card))
        
        Swal.fire({
            icon: 'success',
             title: 'Producto Agregado al Carrito',
             showConfirmButton: false,
             timer: 1500
           })

    }
    return (
        <div className={styleCard.containerCard}>
            <div >
                <img src={url} />
            </div>
            <div >
                <h3>$ {price}</h3>
                <button onClick={handleSubmit}>
                    <h3>Añadir al carrito</h3>
                </button>
            </div>
        </div>
    )
}
