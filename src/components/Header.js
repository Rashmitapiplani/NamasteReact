const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={require("../../Good-food-logo-design-on-transparent-background-PNG.png")}
          alt="text"
        />
      </div>
      <div>
        <ul className="nav-Items">
          <li>Home</li>
          <li>Abou Us</li>
          <li>Whishlist</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
