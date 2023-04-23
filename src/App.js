import { useState } from 'react';
import PokemonForm from './Components/Pokemon/PokemonForm';
import Pokemon from './Components/Pokemon/Pokemon';
import './App.css';

function App() {
  const [pokeName, setPokeName] = useState("test")
  return (
    <div className="App mt-4">
      <p>{pokeName}</p>
      <PokemonForm setPokeName={setPokeName}/>
      <Pokemon pokeName={pokeName}/>
    </div>
  );
}

export default App;
