import { useState } from 'react';
import PokemonForm from './Components/Pokemon/PokemonForm';
import Pokemon from './Components/Pokemon/Pokemon';
import ToDo from './Components/ToDo';
import Die from './Components/Die/Die'
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import PokeCard from './Components/PokeCard';

function App() {
  const [pokeName, setPokeName] = useState("test")
  return (
    <div className="App mt-4">
      {/* <p>
        <Link to={'/form'}>This</Link> 
        is my 
        navbar
      </p>
      <h1>THIS WILL SHOW UP ON EVERY PAGE!</h1>
      <Routes>
        <Route exact path='/' element={<Die numSides={10}/>} />
        <Route path='form' element={<PokemonForm/>} />
        <Route path='todo' element={<ToDo/>} />
      </Routes> */}
      <PokeCard />
    </div>
  );
}

export default App;
