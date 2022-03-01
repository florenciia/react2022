import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { traerServicios } from '../ItemDetailContainer/ListaServicios';
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

function ItemListContainer({bienvenida}){

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);

    const {tipo} = useParams();


    useEffect(() => {
    traerServicios.then(resultado => {
        if(tipo){
            let servicioss = resultado.filter(elemento => elemento.tipo === tipo);
            setServicios(servicioss);
        } else {
            setServicios(resultado);
        }
        
    })
    .finally(() => {
        setLoading(false);
    });
    }, [ tipo ]);

    return(
        
            <div>
                {loading ? (
                    <h1 className="inicio">{bienvenida="ASESORAMIENTO FINANCIERO"}</h1>
                ) : (
                    <>  
                        <ItemList servicios={servicios} />
                    </>
                )} 

            </div>  
    )
}
export default ItemListContainer;