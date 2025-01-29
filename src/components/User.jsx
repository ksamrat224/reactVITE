import React from "react";
import { useState } from "react";

const User =(props)=> {
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(1);
    return (
     <div className="user-card">  
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <h1>Name:{props.name}</h1>
        <h2>Location:{props.location}</h2>
        <h3>Contact:@samrat224(X)</h3>

     </div>
    );
};
export default User;