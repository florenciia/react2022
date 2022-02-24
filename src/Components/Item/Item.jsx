import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, servicio, precio}) => {
  return (
        <div className='fondo'>
            <Link to={`/item/${id}`}>
                        <div className='muestraServicio'>
                              <h1> {servicio} </h1>
                              <p> Precio: {precio} </p>
                        </div>
            </Link>

            <div className='container'>
                   <ItemCount /> 
            </div>

            <hr className='hr'/>
            
        </div>
        
          
    );
};

export default Item;