import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo =useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer/>; 

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
      console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl" >{name || "Restaurant"}</h1>
      <p className="font-bold text-lg">{cuisines ? cuisines.join(", ") + " - " + costForTwoMessage : "Loading..."}</p>
      {/* <h2>Menu</h2>
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
      </ul> */}
      {categories.map((category)=>
        (<RestaurantCategory data={category?.card?.card}/>))}
    </div>
  );
};

export default RestaurantMenu;
