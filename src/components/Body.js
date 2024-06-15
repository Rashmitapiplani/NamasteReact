import RestaurantCard, {
  withPromotedLabel,
} from "./Restaurants/RestaurantCard";
import restaurantsList from "../utils/mockData";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantMenu from "./Restaurants/RestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantsList, setrestaurantsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };
  const handleSearchClick = () => {
    const filtered = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };
  const handleFilterClick = () => {
    const filtered = restaurantsList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurants(filtered);
  };

  const PromotedCard = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    const restaurantApi = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const result = await response.json();
        console.log(result);
        setrestaurantsList(
          result?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
            ?.restaurants ||
            result?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle
              ?.restaurants ||
            []
        );

        setFilteredRestaurants(
          result?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
            ?.restaurants ||
            result?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle
              ?.restaurants ||
            []
        );
      } catch (error) {
        console.log(error);
      }
    };
    restaurantApi();
  }, []);
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false) {
    return <h3>Internet is off.</h3>;
  }
  if (restaurantsList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex m-4 p-4 gap-[30] items-center">
        <div className="p-4 border-black">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Restaurants..."
            className=" border-blue-700"
          />
          <button
            className=" text-lg bg-black text-white rounded-md px-3 mx-2"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        <div className="filterRestaurant">
          <button
            className=" text-lg bg-black text-white rounded-md px-3"
            onClick={handleFilterClick}
          >
            {" "}
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch">
        {filteredRestaurants.map((restaurant, index) => (
          <Link
            to={`components/Restaurants/RestaurantMenu/${restaurant.info.id}`}
          >
            {restaurant?.info?.isNewlyOnboarded ? (
              <PromotedCard restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
