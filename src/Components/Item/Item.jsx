import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
// import curso from '../ItemDetailContainer/curso.svg';


const Item = ({id, titulo, precio}) => {
  return (
        <div className='container'>
            
                        <div className='muestraServicio2'>
                                <h1 className='titulo1'> {titulo} </h1>
                                <p className='price'> Precio: {precio} </p>
                                {/* <img className='imgg' src={curso} alt='img'/> */}
                                <br/>
                                <Link to={`/item/${id}`}>
                                    <button className='btn-add'> Ver detalles </button>
                                </Link>
                        </div>

            <div >
                   {/* <ItemCount />  */}
            </div>
            
        </div>
        
          
    );
};

export default Item;