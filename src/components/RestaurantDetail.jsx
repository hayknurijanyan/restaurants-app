import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurants } from "../features/RestaurantsSlice";

const RestaurantDetail = ({ match }) => {
  const { id } = match.params;
  const restaurantsData = useSelector((state) => state.restaurantsData);
  const restaurant = useSelector((state) =>
    state.restaurantsData.find((data) => data.name === id)
  );

  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");

  const handleAddReview = () => {
    if (
      ratingValue > 10 ||
      ratingValue <= 0 ||
      nameValue === "" ||
      ratingValue === ""
    ) {
      alert("please fill form correctly");
      return -1;
    } else {
      restaurant.reviews.unshift({
        name: nameValue,
        rating: ratingValue,
        date: new Date().toISOString().substring(0, 10),
        text: textValue,
      });
      dispatch(updateRestaurants(restaurantsData));
      setNameValue("");
      setTextValue("");
      setRatingValue("");
    }
  };

  return restaurant ? (
    <div className="restaurant-detail">
      <h2>
        {restaurant.name} - {restaurant.rating}☆
      </h2>
      <div className="restaurant-detail-info">{restaurant.info}</div>
      <div className="restaurant-detail-reviews">
        <h3>Reviews</h3>
        <div className="row">
          <input
            type="text"
            placeholder="Write your name*"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />
          <input
            type="number"
            min="1"
            max="10"
            placeholder="Rate from 1-10*"
            value={ratingValue}
            onChange={(e) => {
              setRatingValue(e.target.value);
            }}
          />
        </div>

        <textarea
          type="text"
          placeholder="Write your review"
          col="30"
          style={{ height: "70px" }}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />

        <button className="main-button" onClick={handleAddReview}>
          Add Review
        </button>
        {restaurant.reviews.map((review, i) => {
          return (
            <li key={i}>
              <h3>
                {review.name} - {review.rating}☆
              </h3>
              <h6>{review.date}</h6>
              <p style={{ margin: "5px 0" }}>{review.text}</p>
            </li>
          );
        })}
      </div>
    </div>
  ) : (
    <h1 style={{ backgroundColor: "white", textAlign: "center" }}>
      LOADING DATA...
    </h1>
  );
};

export default RestaurantDetail;
