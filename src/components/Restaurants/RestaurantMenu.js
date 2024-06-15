import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantMenuUrl } from "../../utils/constants";
import Shimmer from "../Shimmer";
import useRestaurantData from "../../utils/useRestaurantMenu";
import RestaurantMenuItems from "./RestaurantMenuitems";

const RestaurantMenu = () => {
  // const [resturantData, setResturantData] = useState([]);
  const id = useParams();

  console.log("In restaurnt menu component");
  const { restaurantData, offers } = useRestaurantData(id);
  const [showIndex, setShowIndex] = useState(null);
  const handleAccordionClick = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };
  if (restaurantData?.length === 0) {
    return <Shimmer />;
  }

  const categoryCards =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categoryCards);

  return (
    <>
      <div className="text-center">
        <h3 className="font-bold m-2">
          {restaurantData?.cards[2]?.card?.card?.info?.name}
        </h3>
        {/* <h3>Top Picks</h3>
        <div className="slider-menu">
          {offers.map((res, index) => (
            <div key={index} className="offers">
              {res.info.couponCode}
            </div>
          ))}
        </div> */}
        <div>
          {categoryCards?.map((categoryCard, index) => (
            <RestaurantMenuItems
              data={categoryCard}
              showAccordian={index === showIndex ? true : false}
              // setShowIndex={() => setShowIndex(index)}
              setShowIndex={() => handleAccordionClick(index)}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
