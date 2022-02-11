import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
          <div className="App container-fluid ">
            
            <Navbar />

            <ItemListContainer />

          
                  
          </div>
  );
}

export default App;
