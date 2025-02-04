import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const[btnNameReact,setBtnNameReact]= useState("login");
 //if no dependency array => useEffect is called on every render 
 //if dependency array => useEffect is called only on initial rendering(just once)
 // if dependency is [btnNameReact] => called every time btnNameReact is updated
  useEffect(()=>{
    console.log("useEffect called");
  },[btnNameReact]);

   const onlineStatus=useOnlineStatus();
    return (
      <div className="flex justify-between  ">
        <div className="logo-container">
          <img
            className="w-35"
            src= {LOGO_URL} 
          />
        </div>
        <div className="nav-items">
          <ul className="flex p-5 m-4">
            <li>
              Online Status: {onlineStatus? "🟢":"🔴"}
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/about" >About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link >Cart</Link>
            </li> 
            <button className="login"
            onClick={()=>{
              btnNameReact=== "login"?setBtnNameReact("logout"):setBtnNameReact("login");
            }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;