import { useState } from "react";
import RestaurantItemsList from "./RestaurantItemsList";

const RestaurantMenuItems = ({ data, showAccordian, setShowIndex }) => {
  console.log(data);
  // const [showAccordian, setAccordianValue] = useState(false);
  const show = () => {
    setShowIndex();
  };
  return (
    <div className="mx-auto w-6/12  my-10 p-5  bg-gray-50">
      <div className="flex justify-between ">
        <span className="font-bold ">{data?.card?.card?.title}</span>
        <span onClick={show}> ⬇️ </span>
      </div>
      {showAccordian && (
        <div>{<RestaurantItemsList items={data?.card?.card?.itemCards} />}</div>
      )}
    </div>
  );
};

export default RestaurantMenuItems;
