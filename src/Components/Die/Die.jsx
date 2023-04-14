import { useState, useEffect } from "react";

const Die = ({numSides, var1, var2}) => {
    const [dieValue, setDieValue] = useState(0);
    const [pageRendered, setPageRendered] = useState(false)
    let myTxt = "The number of sides: "

    const rollDie = ()=> {
        let rand = Math.floor(Math.random()*numSides)+1
        setDieValue(rand);
    }

    useEffect(()=>{
        console.log("use effect triggered!")
        rollDie();
        setInterval(()=> {
            setPageRendered(true);
        },5000)
    },[numSides])
   
    return(
        
        (pageRendered ? 
        <div>
            <h1>{myTxt} {numSides}</h1>
            <i className="fa-solid fa-clock"></i>
            <h1>The die value is: {dieValue} </h1>
            <button onClick={()=>rollDie()}>Click Me</button>
        </div>: <div>Page Loading...</div>)
    );
}

export default Die;

