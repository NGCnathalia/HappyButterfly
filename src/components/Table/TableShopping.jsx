import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import styleTable from "../Table/Table.module.css"
import { editCounterDecrement } from '../../features/tasks/tasksSlice';
import { editCounterIncrement } from '../../features/tasks/tasksSlice';
import { deleteTask } from '../../features/tasks/tasksSlice';
import Swal from 'sweetalert2'

export const TableShopping = () => {
    let x = 0
    const AddTotal = (finishPrice) => {
        x += parseInt(finishPrice);
    }
    const dispatch = useDispatch();
    const products = useSelector((state) => state.tasks);
    console.log(products)
    const handleUpdateCountIncrement = (id) => {
        console.log(id)
        dispatch(editCounterIncrement(id));
    }
    const handleUpdateCountDecrement = (id) => {
        console.log(id)
        dispatch(editCounterDecrement(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
        Swal.fire({
            icon: 'error',
            text: 'Producto Eliminado del Carrito',

        })
    }

    const handleEnviar = () => {

        // const { product: { name, count, price, finishPrice, id, nameCategory, url } } = props;
        if (Object.entries(products).length === 0) {

        } else {
            const mensaje = `
            Buen día, me encuentro interesad@ en comprar los siguientes productos:
            ______________________________________________________________________________________________________
            ${products.map(item => ` 
            * Categoría:  ${item.filter}
            * Código del Productos:  ${item.id}
            * Cantidad:  ${item.count}
            * Subtotal :  ${item.subTotal} 
            --------------------------------------------------------------------
            `)}
            ________________________________________________________________________________________________________
            Valor Total del producto ${x}`;

            const url = `https://api.whatsapp.com/send?phone=573195113013&text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        }
    }

    return (
        <div className={styleTable.containerTable} >

            <table className={styleTable.table}>
                <thead>
                    <tr className={styleTable.tableTitle}>
                        <th>Imagen</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody className={styleTable.containerTable}>
                    {
                        products.map(item => {
                            AddTotal(item.subTotal)
                            return (

                                <tr key={item.id}>
                                    <td><img src={item.url} alt="" /></td>
                                    <td>{item.filter}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div >
                                            <button onClick={() => handleUpdateCountDecrement(item.id)}>-</button>
                                            <span>{item.count}</span>
                                            <button onClick={() => handleUpdateCountIncrement(item.id)}>+</button>
                                        </div>
                                    </td>
                                    <td>{parseInt(item.count) * parseInt(item.price)}</td>
                                    <td><button onClick={() => handleDelete(item.id)} >X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={styleTable.containerTotal}>
                <h1>Total: $</h1>
                <h2>
                    {x}
                </h2>
            </div>
            <div className={styleTable.divBtn}>
                <button className={styleTable.btn} onClick={handleEnviar}>
                    Concretar la compra
                </button>
            </div>

        </div >
    )
}
