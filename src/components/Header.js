import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector, useDispatch } from "react-redux";

console.log("outside");
const HeaderComponent = () => {
  const cartItems = useSelector((state) => state.cart.items); // Reading cart items from the state
  console.log(cartItems);

  const onlineStatus = useOnlineStatus();
  console.log("render again");
  return (
    <div className="flex justify-between m-1 bg-gray-50 items-center  shadow-lg">
      <div className="">
        <img
          src={require("../../Good-food-logo-design-on-transparent-background-PNG.png")}
          alt="text"
          className=" w-36"
        />
      </div>
      <div>
        <ul className="flex p-4 m-4 gap-10">
          <li className=" text-lg">Home</li>
          <Link to="/about" className="text-lg">
            About Us
          </Link>
          <li className="text-lg"> Whishlist</li>
          <Link to="/cart" className="text-lg">
            Cart {cartItems.length}
          </Link>
          <li>{onlineStatus ? "✅ " : "❌"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
