import { useState } from "react";

const PokemonForm = (props) => {
    const [pokeInput, setPokeInput] = useState();

    const onClick = (e) => {
        e.preventDefault();
        props.setPokeName(pokeInput);
    }

    return(
        <div>  
            Type in name of Pokemon: <input type="text" value={pokeInput} onChange={(e)=> setPokeInput(e.target.value)}/>
            <button type="submit" className="btn btn-primary" onClick={(e)=> onClick(e)}>Submit</button>
        </div>
    );
}

export default PokemonForm;