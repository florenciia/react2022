// import React from 'react';
// 


// const ItemDetailContainer = () => {
//     const {id} = useParams();
    
//     console.log(id)
    
//     return(
//         <div>
        

//         </div>
//     );
// }



// export default ItemDetailContainer;

import React from "react";
import { useParams } from "react-router";
import { traerServicios } from './ListaServicios';

function ItemDetailContainer(){

    const {id} = useParams();
    console.log(id)
    console.log(traerServicios)
    console.log(traerServicios[id])

    return(
        <div>
             <p>{traerServicios[id].id}</p>
             <h1>{traerServicios[id].servicio}</h1>
             <p>{traerServicios[id].precio}</p>
             <p>{traerServicios[id].descripcion}</p>
        </div>       
        
    )
}
export default ItemDetailContainer;
