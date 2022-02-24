import React, {useState, useEffect} from "react";

import ItemList from "../ItemList/ItemList";
import { traerServicios } from '../ItemDetailContainer/ListaServicios';

function ItemListContainer(){

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    traerServicios.then(resultado => {
        setServicios(resultado);
    })
    .finally(() => {
        setLoading(false);
    });
    }, [servicios]
    )

    return(
        
            <div>
                {loading ? (
                    <h1>Cargando servicios</h1>
                ) : (
                    <>
                        <ItemList servicios={servicios} />
                    </>
                )} 

            </div>  
    )
}
export default ItemListContainer;