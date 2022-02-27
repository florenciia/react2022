import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { traerServicios } from '../ItemDetailContainer/ListaServicios';
import './ItemListContainer.css';

function ItemListContainer({bienvenida}){

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);

    const asesoramiento = servicios.filter(servicioElegido => servicioElegido.tipo =='asesoramiento');
    const curso = servicios.filter(servicioElegido => servicioElegido.tipo =='curso');
    const producto = servicios.filter(servicioElegido => servicioElegido.tipo =='producto');


    useEffect(() => {
    traerServicios.then(resultado => {
        setServicios(resultado);
    })
    .finally(() => {
        setLoading(false);
    });
    }, []);

    return(
        
            <div>
                {loading ? (
                    <h1 className="inicio">{bienvenida="ASESORAMIENTO FINANCIERO"}</h1>
                ) : (
                    <>
                        <ItemList servicios={asesoramiento} />
                        <ItemList servicios={curso} />
                        <ItemList servicios={producto} />
                    </>
                )} 

            </div>  
    )
}
export default ItemListContainer;