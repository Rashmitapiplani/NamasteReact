import { RestaurantLogo } from "../../utils/constants"; // named import

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  return (
    <div className="border-solid border-2 border-grey-600  m-4 p-4 w-56">
      <div>
        <img
          //src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantData.info.cloudinaryImageId}`}
          src={`${RestaurantLogo}/${restaurantData.info.cloudinaryImageId}`}
          alt="test"
          className=" h-[200] w-full"
        />
      </div>
      <div className="overflow-ellipsis">
        <div className=" text-sm font-bold pt-2">
          {restaurantData.info.name}
        </div>
        <div>
          <span className=" text-base font-bold">
            {restaurantData.info.avgRating} {"."}{" "}
            {restaurantData.info.sla.deliveryTime} {"mins."}
          </span>
        </div>
        <div className=" overflow-hidden text-ellipsis font-bold">
          {restaurantData.info.cuisines.join(",")}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute font-bold px-3 m-2 pl-7 text-xl text-white z-40 bg-black rounded-md ">
          {" "}
          Promoted
        </label>
        <RestaurantCard {...props}>/</RestaurantCard>
      </div>
    );
  };
};
