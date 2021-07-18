import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ data, match, handleRestaurantClick }) => {
  return (
    <div className="restaurant">
      <div
        onClick={() => handleRestaurantClick(data)}
        className="restaurant-main-info"
      >
        <h2>{data.name}</h2>
        <ul>
          <li>Rating {data.rating}☆</li>
          <li>Reviews {data.reviews.length}</li>
          <li>Open {data.hours}</li>
        </ul>
      </div>
      <Link to={`/${data.name}`} style={{ margin: "auto 0" }}>
        <button className="main-button">View Restaurant</button>
      </Link>
    </div>
  );
};

export default Restaurant;
