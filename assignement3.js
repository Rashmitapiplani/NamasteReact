import React from "react";

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={leftSectionStyle}>Login</div>
      <div style={centerSectionStyle}>
        <input type="text" placeholder="Search..." style={searchBarStyle} />
      </div>
      <div style={rightSectionStyle}>
        <img
          src="user-icon.png" // replace with the path to your user icon image
          alt="User Icon"
          style={userIconStyle}
        />
      </div>
    </div>
  );
};
ReactDOM.render(<Header />, document.getElementById("root"));

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

export default Header;
