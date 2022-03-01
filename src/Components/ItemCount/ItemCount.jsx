import React, {useState} from "react";
import './ItemCount.css';

function ItemCount({handleNuevoTitulo}) {

    const [count, setCount] = useState(0);

     const aumentar = () => {
        if(count < 20) {
            setCount(count + 1);    
        } 
        else{
            alert('Límite de solicitud')
        }
    }

     const disminuir = () => {
         if(count > 0){
            setCount(count - 1);
         }
         else{
             alert('Agregar producto')
         }
         
    }


    return(
       
        <div className="count">
            {/* <h1 className="countTitle"> Cantidad de servicios que desea</h1> */}
            <h1 className="countN">{count}</h1>
            <button className="btnn" onClick={aumentar}> + </button>
            <button className="btnn" onClick={disminuir}> - </button>
            <br/>
            <button className="btn-add"> Agregar al carrito</button>
            {/* <>
            <button className="btn-add" onClick={handleChildClick}> click desde el hijo</button>
            <button className="btn-add" onClick={()=>{handleNuevoTitulo('nuevo titulo desde hijo')}}> enviar nuevo titulo</button>
            </> */}
            
        </div>        
    )

}

export default ItemCount;