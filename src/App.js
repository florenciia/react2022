import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
function App() {
  
  return (

    <>
     
     
     <div className="App container-fluid ">
     
       <BrowserRouter>
         <Navbar />
           <Routes>

           <Route path="/" element={ <ItemListContainer /> }  />

           <Route path="/category/:id" element={ <ItemListContainer /> }  />

           <Route path="/item/:id" element={ <ItemDetailContainer /> }  />

             
           </Routes>
           <footer>
             sitio desarrollado por...
           </footer>
       </BrowserRouter>         
        
     </div>

    </>
    
           
  );
}

export default App;
