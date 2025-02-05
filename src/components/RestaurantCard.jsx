import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, totalRatingsString } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-200 hover:bg-gray-300" >
      <img alt="res-logo" className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg" >{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <p>{totalRatingsString} STARS</p>
      <p>Delivery Time: {sla?.deliveryTime} mins</p>
      <p>Average Rating: {avgRating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;