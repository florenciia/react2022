import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
// import CarritoFinal from './Components/CarritoFinal/CarritoFInal';

function App() {

  return (

    <>  
     <div className="App container-fluid ">
     
       <BrowserRouter>
         <Navbar />

           <Routes>
            <Route exact path="/" element={ <ItemListContainer/>}  />
            <Route exact path="/item/:id" element={ <ItemDetailContainer /> }  />
            <Route exact path="/category/:tipo" element={ <ItemListContainer /> }  />
            {/* <Route exact path="/carritoFinal" element={<CarritoFinal/>}/> */}
           </Routes>

       </BrowserRouter>         
        
     </div>
    </>          
  );
}

export default App;
