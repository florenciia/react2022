import React from 'react';
import './ItemDetail2.css';
import { Link } from 'react-router-dom';


const ItemDetail2 = ({titulo,precio,descripcion}) => {

  return (
        <div className='muestraServicio'>
            <h1 className='titulo'> {titulo} </h1>
            <p className='precio'> Precio: {precio} </p>
            <p className='descrip'> Sobre el servicio: {descripcion} </p>
           
            <Link to={`/`}>
                <button className='volver'> Todos los servicios </button>
            </Link>
        </div>
         
    )
}          
export default ItemDetail2;