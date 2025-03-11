import { useState } from "react";
import ProfileCard from "./ProfileCard";
const ProfilInputs = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [hobby,setHobby] = useState("");
    return(
        <div>
            <input placeholder="type your name..." value={name} onChange={(event)=>{setName(event.target.value)}}/>
            <input placeholder="type your age..." value={age} onChange={(event)=>{setAge(event.target.value)}}/>
            <input placeholder="type your hobby..." value={hobby} onChange={(event)=>{setHobby(event.target.value)}}/>
            <ProfileCard userName={name} userAge={age} userHobby={hobby}/>
        </div>
    )
};
export default ProfilInputs;