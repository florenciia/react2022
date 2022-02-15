import React from 'react';
import './Item.css';

const Item = ({id, servicio, precio, descripcion}) => {
  return (

          <div className='muestraServicio'>

                        <p> {id} </p>
                        <h1> {servicio} </h1>
                        <p> Precio: {precio} </p>
                        <p> Sobre el servicio: {descripcion} </p>
          </div>
    );
};

export default Item;