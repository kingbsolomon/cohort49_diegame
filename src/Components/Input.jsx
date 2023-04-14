import { useState } from "react";

const Input = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(true);

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(true);

    const changeFirstName = (e) => {
        console.log(e)
        setFirstName(e.target.value)
        if(firstName.length < 2){
            setFirstNameError(true)
        }
        else{
            setFirstNameError(false)
        }
    }
    return(
        <div>
             <h1>{firstName}</h1>
            First Name: <input type="text" value={firstName} onChange={e=> changeFirstName(e)} />
            {firstNameError ? <p>Please Enter a valid first name</p>: <p></p>}
            {firstNameError ? <button disabled='disabled'>Click Me</button>: <button>Click Me</button>}
        </div>
    );
}

export default Input;