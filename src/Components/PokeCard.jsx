import React, {useEffect} from "react";
import axios from "axios";


const PokeCard = ()=> {

    useEffect(()=> {
        getPokemonInfo();
    })

    const getPokemonInfo = () => {
        axios.get('https://kingbsolomon-ideal-pancake-4vg7p9qv65r29qq-3000.preview.app.github.dev/api/pokemon/')
        .then(response => console.log(response))
    }



    return(
        <div>
            <p>Pokemon Info</p>
        </div>
    )
}

export default PokeCard;