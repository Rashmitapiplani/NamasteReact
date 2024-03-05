import RestaurantCard from "./Restaurants/RestaurantCard";
import restaurantsList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="searchBar"></div>
      <div className="res-container">
        {/* <RestaurantCard restaurantData={restaurantsList} /> */}
        {restaurantsList.map((restaurant, index) => (
          <RestaurantCard key={index} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
