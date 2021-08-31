import { useState } from "react";
const State = () => {
    const [name, setName] = useState('Khaled');
    const [age, setAge] = useState(26)
    const handleClick = () => {
        setName('Nirob')
        setAge(25)
    }
    return (
        <div className = "state">
            <h2>Home</h2>
            <h4>{name} is {age}</h4>
            <button onClick = {handleClick}>Next User</button>
           
        </div>
    )
}

export default State;