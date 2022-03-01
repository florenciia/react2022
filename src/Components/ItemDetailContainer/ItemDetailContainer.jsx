import React, { useState, useEffect } from "react";
import ItemDetail2 from "../ItemDetail2/ItemDetail2";
import { useParams } from "react-router";
import { traerServicios, serviciosGeneral, ListaServicios } from "../ItemDetailContainer/ListaServicios";

function ItemDetailContainer(){
    const [servicios, setServicios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();
    console.log(id);

    const traerServicioDetalle = servicios.filter(servicioElegido => servicioElegido.id==id);
    console.log(traerServicioDetalle);

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
    },[])

    return(
    
            <div>
                {cargando ? ( <h1> Cargando...</h1>)
                    :
                    (
                        <>

                        {traerServicioDetalle.map((servicioElegido)=>(
                            <ItemDetail2 {...servicioElegido} key={servicioElegido.id}/>
                        ))}

                        </>
                    )}
            </div>
        
    )
}
export default ItemDetailContainer;
