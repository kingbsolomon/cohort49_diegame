import { useState } from "react";

const ToDo = (props) => {
    const [inputBox, setInputBox] = useState("");

    const [todoList, setToDoList] = useState(["Make the bed", "Wash my hands",
        "Eat", "Walk the dog"]);

    const addIt = (e) => {
        setInputBox(e.target.value);
    }

    return(
        <div>
            <h1>todos</h1>
            <input type="text" placeholder="What Needs To be Done?" value={inputBox} onChange={(e)=> addIt(e)}/>
            <ul>
                {todoList.map((item) => {
                    return(
                        <li>{item}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ToDo;