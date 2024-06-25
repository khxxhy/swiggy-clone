import { CDN_URL } from "../Utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    cuisines,
    deliveryTime,
    avgRating,
  } = resData?.info;

  return (
    <div className="res-big-card">
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-cards"
        ></img>
        <div className="res-info">
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwo} FOR TWO </p>
          <p>{deliveryTime}minutes</p>
          <p>{avgRating}stars</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
