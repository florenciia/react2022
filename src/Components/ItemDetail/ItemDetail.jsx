import React, {useEffect, useState} from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router-dom';
import { itemDetail2 } from '../ItemDetailContainer/ItemDetailContainer';

const ItemDetail = () => {

  const [personaje, setPersonaje] = useState(null)


  const params = useParams()
  useEffect(() =>{
    itemDetail2(params.id, setPersonaje)
  }, [])

  return (
   
    <div className='item'>
      <h1> Personaje con el Id {params.id} </h1>
      <p> con el nombre {personaje.name} </p>
      <img src={personaje.image} alt='image' />
    </div>
    
  )
}
export default ItemDetail;








// const getValues = async() =>{
//     try{
//         const response = await fetch('url');
//         const result = await response.json();
//         console.log('result', result);
//     } catch (error) {
//         console.log('error', error)
//     }
// }   getValues()