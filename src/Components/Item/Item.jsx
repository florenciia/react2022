import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, servicio, precio, descripcion}) => {
  return (
        <div>
            <Link to={`/item/${id}`}>
                  <div className='muestraServicio'>
                        <p> {id} </p> 
                        <h1> {servicio} </h1>
                        <p> Precio: {precio} </p>
                        {/* <p> Sobre el servicio: {descripcion} </p>  */}
                  </div>
            </Link>
            
            <ItemCount /> 
        </div>
        
          
    );
};

export default Item;