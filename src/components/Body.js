import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurant.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
