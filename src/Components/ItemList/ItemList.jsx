import React from 'react';
import Item from '../Item/Item';

const ItemList = ({servicios}) => {
  return (
        <div className='cadaProducto'>
          {servicios.map((servicioNuevo) => (
                <Item {...servicioNuevo} key={servicioNuevo.id} />
            )
          )} 
              
        </div>
  );
};
export default ItemList;