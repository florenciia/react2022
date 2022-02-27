import React, {useState} from "react";
import './ItemCount.css';

function ItemCount() {
    const [count, setCount] = useState(0);

     const aumentar = () => {
        if(count < 6) {
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
             alert('Agregar proctudo')
         }
         
    }

    return(
        <div className="count">
            <h1 className="countTitle"> Cantidad de servicios que desea</h1>
            <h1 className="countN">{count}</h1>
            <button className="btnn" onClick={aumentar}> + </button>
            <button className="btnn" onClick={disminuir}> - </button>
            <br/>
            <button className="btn-add"> Agregar productos</button>
        </div>
    )

}

export default ItemCount;