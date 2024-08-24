import { useSelector } from "react-redux";
import cartSlice from "../redux/cartSlice";
import RestaurantItemsList from "./Restaurants/RestaurantItemsList";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <>
      <RestaurantItemsList items={cartItems} />
    </>
  );
};

export default Cart;
