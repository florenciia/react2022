import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = () => {

    const [servicios, setServicios] = useState([]);

    const serviciosGeneral = [
    {id:1, servicio:'Bursatil', precio:'$25', descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id:2, servicio:'Administración de ahorros', precio:'$25', descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {id:3, servicio:'Armadon de carteras de inversión', precio:'$25', descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    ]

    const promesa = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        resolve(serviciosGeneral)
    }, 2000)
    
    });

    useEffect(() => {
    promesa.then(resultado => {
        // console.log('resultado', resultado);
        setServicios(resultado);
    })
    }, [serviciosGeneral]
    )
    
  

  return (
    <>
        {servicios.length === 0 ?
            <>
             <p className='cargando'>Buscando servicios</p>
            </>
           

            :

            servicios.map((elemento) =>{
              return(
                <div key={elemento.id} className='muestraServicio'>
                    <p> {elemento.id} </p>
                    <p> Servicio: {elemento.servicio} </p>
                    <p> Precio: {elemento.precio} </p>
                    <p> Sobre el servicio: {elemento.descripcion} </p>
                </div>
              )
            })
            
            }

     

    </>
  )
}
export default Item;