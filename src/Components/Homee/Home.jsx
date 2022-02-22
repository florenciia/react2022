import React, { useEffect, useState } from 'react';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    ItemDetailContainer(setPersonajes)
  }, [])

  console.log(ItemDetailContainer);
  

  return (
    <div className='home'>
    
        {personajes != null ? (
          personajes.map(personaje => (
            <div key={personaje.id}>
              <Link to={`/personaje/${personaje.id}`}> {personaje.name} </Link>
            </div>
          ))
          ) : ('no hay personajes') }



    </div>
  )
}

export default Home;