import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo =useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer/>; 

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name || "Restaurant"}</h1>
      <p>{cuisines ? cuisines.join(", ") + " - " + costForTwoMessage : "Loading..."}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
