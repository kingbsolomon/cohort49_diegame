import { useState, useEffect } from "react";

const Die = (props) => {
    const [dieValue, setDieValue] = useState(0);
    let myTxt = "The number of sides: "

    const rollDie = ()=> {
        let rand = Math.floor(Math.random()*props.numSides)+1
        setDieValue(rand);
    }

    useEffect(()=>{
        console.log("use effect triggered!")
        rollDie();
    },[])
   
    return(
        <div>
            <h1>{myTxt} {props.numSides}</h1>
            <h1>The die value is: {dieValue} </h1>
            <button onClick={()=>rollDie()}>Click Me</button>
        </div>
    );
}

export default Die;

