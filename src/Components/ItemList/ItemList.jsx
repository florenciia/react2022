import React from 'react';
import Item from '../Item/Item';

const ItemList = ({servicios}) => {
  return (
        <div className='cadaProducto'>
        
          {servicios.map((servicioElegido) => (
            <Item {...servicioElegido} key={servicioElegido.id} />                
            )
          )} 
              
        </div>
  );
};
export default ItemList;