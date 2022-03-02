import React, {useState} from 'react';
import './ItemDetail2.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail2 = ({titulo,precio,descripcion}) => {

    const [cart, setCart] = useState(0);

    const agregarAlCarrito = (e) => {
        setCart(e);
    }

    const mostrar = () => {
        console.log('guardo datos', cart);
    }

    mostrar();

    return (
        <div className='muestraServicio'>
            <h1 className='titulo'> {titulo} </h1>
            <p className='precio'> Precio: {precio} </p>
            <p className='descrip'> Sobre el servicio: {descripcion} </p>
            
            {   cart === 0 ? <ItemCount onAdd={(e) => agregarAlCarrito(e)}/> 
                    :
                <>  <Link to={`/carritoFinal`}> 
                        <button className='btn-add-final'> Finlizar Compra</button> 
                    </Link>
                </>
            }
            <br/>

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