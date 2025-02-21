import { useState, useEffect,useContext } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(CARD_API);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const filterTopRated = () => {
    const topRatedList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurants(topRatedList);
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return (<h1>Looks like you're offline! <br /> Please check your internet!!</h1>);

  const{loggedInUser,setUserName}=useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-blue-700"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-300 m-4 rounded-md" onClick={handleSearch}>Search</button>
        </div>

        <div className="search m-4 p-4 flex items-center">
        <button className="px-4 py-2 bg-gray-400 rounded-md" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label >UserName:</label>
        <input type="text" className="border border-black p-2 m-2"
        value={loggedInUser}
        onChange={(e)=>setUserName(e.target.value)}/>
        </div>

      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ?(<RestaurantCardPromoted resData={restaurant}/>): (<RestaurantCard resData={restaurant} />
          )}
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;