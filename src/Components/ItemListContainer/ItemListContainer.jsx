import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";
import { traerServicios } from '../ListaServicios';


function ItemListContainer(){

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    traerServicios.then(resultado => {
        // console.log('resultado', resultado);
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

            <ItemCount />    

            <ItemDetailContainer />  
        </div>       
        
    )
}
export default ItemListContainer;