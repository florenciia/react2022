import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { traerServicios } from "../ItemDetailContainer/ListaServicios";
import ItemList from "../ItemList/ItemList";

function ItemCategoryContainer(){
    const [servicios, setServicios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {tipo} = useParams();
    console.log(tipo);

    const serviciosTipo = servicios.filter(servicioElegido => servicioElegido.tipo==tipo);
    console.log(serviciosTipo);

    useEffect(() => {
        traerServicios.then((res) =>{
            setServicios(res);
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setCargando(false);
        })
    })

    return(
    
            <div>
                {cargando ? ( <h1> Cargando...</h1>)
                    :
                    (
                        <>
                            
                        <ItemList servicios={serviciosTipo}/>

                        </>
                    )
                }
            </div>
        
    )
}
export default ItemCategoryContainer;
