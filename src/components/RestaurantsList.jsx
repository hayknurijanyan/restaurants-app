import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Restaurant from "./Restaurant";
import { selectRestaurant } from "../features/RestaurantsSlice";
import { loadRestaurants } from "../features/RestaurantsSlice";

const RestaurantsList = () => {
  const sortedRestaurants = useSelector((state) => state.restaurantsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurantClick = (data) => {
    dispatch(selectRestaurant(data));
    setTimeout(() => {
      dispatch(selectRestaurant({}));
    }, 500);
  };

  return (
    <div className="restaurants">
      {sortedRestaurants.map((data, i) => {
        return (
          <Restaurant
            data={data}
            key={i}
            handleRestaurantClick={() => restaurantClick(data)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantsList;
