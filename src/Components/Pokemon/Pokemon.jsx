import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = (props) => {
  const [pokeResponse, setPokeResponse] = useState({});

  useEffect(()=> {
    getPokemon();
  },[props.pokeName])

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
      .then((response)=> setPokeResponse(response.data));  
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Name: {pokeResponse.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">Weight: {pokeResponse.weight}</h6>
          <p className="card-text">
            Abilities:
            <ul>
                {pokeResponse.abilities && pokeResponse.abilities.map((el)=> {
                    return(
                        <li>{el.ability.name}</li>
                    )
                })}
            </ul>
            Moves:
            <ul>
                {pokeResponse.moves && pokeResponse.moves.map((el)=> {
                    return(
                        <li>{el.move.name}</li>
                    )
                })}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
