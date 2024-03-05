import { RestaurantLogo } from "../../utils/constants"; // named import

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  return (
    <div className="res-Card">
      <img
        //src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantData.info.cloudinaryImageId}`}
        src={`${RestaurantLogo}/${restaurantData.info.cloudinaryImageId}`}
        alt="test"
      />

      <div>{restaurantData.info.name}</div>
      <div>Rating:{restaurantData.info.avgRating}</div>
      <div>{restaurantData.info.cuisines.join(",")}</div>
    </div>
  );
};

export default RestaurantCard;
