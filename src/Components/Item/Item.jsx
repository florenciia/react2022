import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, titulo, precio}) => {
  return (
        <div className='container'>
            <Link to={`/item/${id}`}>
            
                        <div className='muestraServicio2'>
                                <h1 className='titulo1'> {titulo} </h1>
                                <p className='price'> Precio: {precio} </p>
                        </div>
            </Link>

            <div >
                   <ItemCount /> 
            </div>
            
        </div>
        
          
    );
};

export default Item;