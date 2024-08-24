import { MenuItem } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";

const RestaurantItemsList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    // Add the item to the cart logic goes here
    dispatch(addToCart(item));
  };
  const [formdata, setFormData] = useState({
    name: "",
    email: null,
  });
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="flex justify-between m-3">
            <div key={index} className=" w-9/12 text-left">
              <span className=" font-bold">{item?.card?.info?.name} </span>
            </div>
            <div className="">
              <img
                key={index}
                src={`${MenuItem}/${item?.card?.info?.imageId}`}
                className=" min-w-14 max-h-20"
              />
              <div>
                <button
                  key={index}
                  className=" bg-black text-white rounded-lg w-24 m-5"
                  onClick={() => addItemToCart(item)}
                >
                  Add+
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantItemsList;
