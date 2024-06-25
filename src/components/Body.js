import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
  
const Body = () => {
    return (
      <div className="body">
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;