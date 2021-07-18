import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
        <h1>Restaurants</h1>
      </Link>
    </div>
  );
};

export default Header;
