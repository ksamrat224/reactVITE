import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const[filteredRestaurant,setFilteredRestaurant]= useState(resList);

  const[searchText,setSearchText]= useState("");

  //whenever state variables update,react triggers a reconciliation cycle (re-renders the component).

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://media-assets.swiggy.com/MERCHANDISING_BANNERS/LOTTIES/MERCH/2024/7/5/b02bf8d8-fee5-42c4-9984-e500d19b6471_CNP.json"
      );
      const json = await response.json();
      console.log(json);

      // Assuming json.data.cards[2].data.data.cards contains restaurant data
      setListOfRestaurant(json.data.cards[2]?.data?.data?.cards || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={searchText}  className="search-box"
          onChange={(e)=> {
             setSearchText(e.target.value);  
          }} />
          <button
          onClick={()=>{
            //filter the restaurant cards and update the UI
            //searchText
          const filteredRestaurant =  listOfRestaurants.filter ((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()) );
          
          setFilteredRestaurant(filteredRestaurant);

          }}
          >Search</button> 

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants && listOfRestaurants.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard
              key={restaurant.data.id}
              resData={restaurant}
            />
          ))
        ) : (
          <p>No restaurants found.</p>
        )} 
      </div>
    </div>
  );
};

export default Body;
