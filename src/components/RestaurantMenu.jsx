import React from "react";
import { useEffect } from "react";


const RestaurantMenu =()=> {
    useEffect (()=>{
    fetchMenu();
    },[]);
    const fetchMenu = async () =>{
       const data = await fetch (
        "https://media-assets.swiggy.com/MERCHANDISING_BANNERS/LOTTIES/MERCH/2024/7/5/b02bf8d8-fee5-42c4-9984-e500d19b6471_CNP.json"
       );
       const json= await data.json ();
       console.log(json);
    };
    return (
      <div className="menu">
        <h1>Name Of The Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burger</li>
            <li>Diet Coke</li>
        </ul>
      </div>
    );
};
export default RestaurantMenu;