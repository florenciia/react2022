import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){
    return(
        <div>

            <ItemList />

            <ItemCount />
            
        </div>
        
    )
}
export default ItemListContainer;