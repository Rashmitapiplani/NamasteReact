import { MenuItem } from "../../utils/constants";
const RestaurantItemsList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="flex justify-between m-3">
            <div key={index} className=" w-9/12 text-left">
              <span className=" font-bold">{item?.card?.info?.name} </span>
            </div>
            <div className="w-3/12 ">
              <img
                key={index}
                src={`${MenuItem}/${item?.card?.info?.imageId}`}
                className=" min-w-14 max-h-20"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantItemsList;
