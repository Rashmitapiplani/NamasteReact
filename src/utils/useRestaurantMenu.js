import { useState, useEffect } from "react";
import { getRestaurantMenuUrl } from "../utils/constants";

const useRestaurantData = (id) => {
  console.log("In userestaurnt hook");

  console.log(id);
  const [restaurantData, setResturantData] = useState([]);
  const [offers, setOffers] = useState([]);

  const fetchData = async () => {
    const apiUrl = getRestaurantMenuUrl(id?.id);
    const response = await fetch(apiUrl);
    const restaurantMenu = await response.json();

    setResturantData(restaurantMenu?.data);

    console.log(restaurantMenu?.data);
    setOffers(
      restaurantMenu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.offers || []
    );
    // console.log(
    //   restaurantMenu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //     ?.offers
    // );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { restaurantData, offers };
};
export default useRestaurantData;
