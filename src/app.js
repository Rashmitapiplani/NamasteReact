import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import { Route } from "router";
import ErrorComponent from "./components/About";
import RestaurantMenu from "./components/Restaurants/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <HeaderComponent />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "components/Restaurants/restaurantMenu/:id",
        element: <RestaurantMenu />,
      },
      // { path: "/restaurantMenu/:id", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
// ReactDOM.render(<AppLayout />, document.getElementById("root"));

// const Header = () => {
//   return (
//     <div style={headerStyle}>
//       <div style={leftSectionStyle}>Login</div>
//       <div style={centerSectionStyle}>
//         <input type="text" placeholder="Search..." style={searchBarStyle} />
//       </div>
//       <div style={rightSectionStyle}>
//         <img
//           src="user-icon.png" // replace with the path to your user icon image
//           alt="User Icon"
//           style={userIconStyle}
//         />
//       </div>
//     </div>
//   );
// };
// ReactDOM.render(<Header />, document.getElementById("root"));

// Styles for the header and its sections
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  background: "#333",
  color: "#fff",
};

const leftSectionStyle = {
  flex: "1",
};

const centerSectionStyle = {
  flex: "2",
  textAlign: "center",
};

const searchBarStyle = {
  width: "80%",
  padding: "5px",
};

const rightSectionStyle = {
  flex: "1",
  textAlign: "right",
};

const userIconStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
};

// export default Header;
