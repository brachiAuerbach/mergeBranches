import { useState } from "react";
import ProfileCard from "./ProfileCard";

const NewProfile = ({addStudent, updateStudent}) =>{

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [hobby,setHobby] = useState("");

    return(
        <>
            <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="number" placeholder="age" value={age} onChange={(event) => setAge(event.target.value)}/>            
            <input placeholder="hobby" value={hobby} onChange={(event) => setHobby(event.target.value)}/>
            <button onClick={() => addStudent({name: name, age: age, hobby: hobby})}>Add</button>
            <button onClick={() => updateStudent({name: name, age: age, hobby: hobby})}>Update</button>
        </>
    )
};

export default NewProfile;