import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const[btnNameReact,setBtnNameReact]= useState("login");
 //if no dependency array => useEffect is called on every render 
 //if dependency array => useEffect is called only on initial rendering(just once)
 // if dependency is [btnNameReact] => called every time btnNameReact is updated


   const onlineStatus=useOnlineStatus();
   const {loggedInUser}= useContext(UserContext);
   console.log(loggedInUser);

    return (
      <div className="flex justify-between bg-pink-100  sm:bg-yellow-200 lg:bg-green-300 shadow-lg m-2">
        <div className="logo-container">
          <img
            className="w-56"
            src= {LOGO_URL} 
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {onlineStatus? "🟢":"🔴"}
            </li>
            <li className="px-4">
              <Link>Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about" >About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">
              <Link >Cart</Link>
            </li> 
            <button className="login"
            onClick={()=>{
              btnNameReact=== "login"?setBtnNameReact("logout"):setBtnNameReact("login");
            }}
            >
              {btnNameReact}
            </button>
            <li className="px-4 font-bold">
              <Link >{loggedInUser}</Link>
            </li> 
          </ul>
        </div>
      </div>
    );
  };

  export default Header;