import React from 'react';
import './ItemDetail2.css';

// import ItemCount from '../ItemCount/ItemCount';

const ItemDetail2 = ({id,servicio,precio,descripcion}) => {

  return (
            <div>
                    <div className='muestraServicio'>
                        <p> {id} </p>
                        <h1> {servicio} </h1>
                        <p> Precio: {precio} </p>
                        <p> Sobre el servicio: {descripcion} </p>
                        
                        {/* <ItemCount /> */}
                    </div>
            </div>
    )
}          
export default ItemDetail2;

/* item detail container --> item list container
item detail --> item
*/

/*
Pasos:


1- Traer el ID con useParams(id)

2 - traer todos los productos con una promesa
3 - filtrar los productos con array.filter por ID
4 - guardar el producto filtrado en un estado de itemDetailContainer
5 - pasar el estado como props a itemDetail.jsx
*/