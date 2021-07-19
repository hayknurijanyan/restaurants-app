import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { Link } from "react-router-dom";

const Marker = ({ data }) => {
  return (
    <div>
      <Link to={data.name} style={{ textDecoration: "none" }}>
        <GiHotMeal className="meal-icon"></GiHotMeal>
        <div className="icon-detail">{data.name}</div>
      </Link>
    </div>
  );
};

export default Marker;
