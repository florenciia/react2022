import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, servicio, precio, descripcion}) => {
  return (
        <Link to={`/item/${id}`}>
              <div className='muestraServicio'>

              <p> {id} </p>
              <h1> {servicio} </h1>
              <p> Precio: {precio} </p>
              {/* <p> Sobre el servicio: {descripcion} </p> */}
              </div>
        </Link>
          
    );
};

export default Item;