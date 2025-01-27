import React from "react";
import User from "./user";
import UserClass from "./UserClass";

const About =()=> {
return (
    <div>
        <h1>About</h1>
        <h2>this is samrat learning about react!!</h2> 
        <User name={"Samrat Karki(function)"} location={"Biratnagar(function)"}/>
        <UserClass name={"Samrat Karki(classes)"} location={"Biratnagar(classes)"}/>
    </div>
);
};
export default About;