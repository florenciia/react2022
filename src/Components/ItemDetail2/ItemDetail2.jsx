import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = async({servicioss}) => {

  return (
            <div>

                {servicioss.map((serv) =>
                    <div className='muestraServicio' key={serv.id}>
                        <p> {serv.id} </p>
                        <h1> {serv.servicio} </h1>
                        <p> Precio: {serv.precio} </p>
                        <p> Sobre el servicio: {serv.descripcion} </p>

                        <Link to={`ItemDetailContainer/${serv.id}`}>
                            <button>DETALLES</button>
                        </Link>

                        <ItemCount />
                    </div>
                    )
                }
            </div>
    )
}          
export default Item;

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