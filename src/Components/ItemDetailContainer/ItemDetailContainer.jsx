// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import '../ListaServicios';
// import { traerServicios } from '../ListaServicios';
// import ItemDetail from '../ItemDetail/ItemDetail';
// import {Link} from 'react-router-dom';

// const ItemDetailContainer = () => {

//     const [producto, setProducto] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         traerServicios.then(resultado =>{
//             setProducto(resultado);
//         })
//         .finally(()=>{
//             setLoading(false);
//         });
//         }, [producto]
//     )

//   return (
//     <div>
//     {loading ? (
//         <h1>cargando producto</h1>
//     ) : (
//         <>

//         <ItemDetail producto={producto} id="1" servicio="algo" precio="$25" descripcion="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"/>
//         </>
//     )}

//     <Link to={`/item/${producto.id}`}> 
//         <div>
//             {producto.name}
//         </div>
//     </Link>
       
//     </div>
//   )
// }
// export default ItemDetailContainer;



import axios from 'axios';

// todoslospersonajes

const ItemDetailContainer = async (state) => {

    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    state('peticion' , peticion.data.results)
}

const itemDetail2 = async (id,state) => {
    const peticion2 = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state('peticion2' , peticion2.data)
}

export{
    ItemDetailContainer,
    itemDetail2
}
