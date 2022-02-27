import React from "react";
import './CartWidget.css';
import carrito from '../CartWidget/carrito.svg';

const CartWidget=()=>{
    return(

    <div>

        <ul className="carrito">

            <li>
                <img className = "imgCarrito" src={carrito} alt="img"/>
            </li>
            <li>
                <h3 className="nroItem">0</h3>
            </li>
            </ul>
            
    </div>
      
    )
    
}

export default CartWidget;
