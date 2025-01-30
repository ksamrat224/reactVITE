import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, totalRatingsString } = resData?.info || {};

  return (
    <div className="restro-card" style={{ backgroundColor: "#d6d6d6" }}>
      <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <p>{totalRatingsString} STARS</p>
      <p>Delivery Time: {sla?.deliveryTime} mins</p>
      <p>Average Rating: {avgRating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;