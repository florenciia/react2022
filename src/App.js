import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer';
import Home from './Components/Homee/Home';

function App() {
  
  return (
          <div className="App container-fluid ">

            <BrowserRouter>

              <Navbar />

                <Routes>
                {/* inicio */}
                  <Route path="/home" element={ <Home/> }  />
                  {/* personaje */}
                  <Route path="/category/:id" element={<ItemDetailContainer/> }  />
                </Routes>

                <footer>
                  sitio desarrollado por...
                </footer>

            </BrowserRouter>         
                  
          </div>
  );
}

export default App;
