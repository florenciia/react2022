import React from 'react';
import './ItemDetail2.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
// import Count from '../ItemCount/count';

const ItemDetail2 = ({titulo,precio,descripcion}) => {

    // const [count, setCount] = useState('');
    // const [count, setCount] = useState(0);

    // const handleTitleParent = (texto) => {
    //     console.log('texto', texto)
    //     setCount('texto', texto)
    // }

    return (
        <div className='muestraServicio'>
            <h1 className='titulo'> {titulo} </h1>
            <p className='precio'> Precio: {precio} </p>
            <p className='descrip'> Sobre el servicio: {descripcion} </p>
            
            <ItemCount />

                {/* <ItemCount handleNuevoTitulo={(texto) => handleTitleParent(texto)}/>     */}
                {/* <Count tituloProp={count}/> */}

            <Link to={`/`}>
                <button className='volver'> Todos los servicios </button>
            </Link>
        </div>
         
    )
}          
export default ItemDetail2;

//item detail tenga el propio contador
//item count recibe x props las funciones

//boton de agregar al carrito, tiene que sumar los productos al carrito.

//APRENDER CONTEXT PARA TERMINAR DE VER REACT <-- 