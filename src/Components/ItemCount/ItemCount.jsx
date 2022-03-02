import React, {useState} from "react";
import './ItemCount.css';

function ItemCount({onAdd}) {

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
            <h1 className="countN">{count}</h1>
            <button className="btnn" onClick={aumentar}> + </button>
            <button className="btnn" onClick={disminuir}> - </button>
            <br/>
            {count > 0 ? <button className="btn-add" onClick={() => onAdd(count)}> Agregar al carrito</button>: <> </> }
            
        </div>        
    )
}
export default ItemCount;