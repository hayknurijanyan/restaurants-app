import { loadRestaurantsData } from "./RestaurantsAPI";

export const RestaurantsReducer = (state = [], action) => {
  if (action.type === "update-restaurants-data") {
    return action.payload;
  }
  return state;
};

export const selectedRestaurantReducer = (state = "", action) => {
  if (action.type === "select-restaurant") {
    return action.payload;
  }
  return state;
};

export const initialRestaurants = () => {
  return [];
};

// action creator
export const selectRestaurant = (newData) => {
  return {
    type: "select-restaurant",
    payload: newData,
  };
};
export const updateRestaurants = (newData) => {
  return {
    type: "update-restaurants-data",
    payload: newData,
  };
};

export const loadRestaurants = () => {
  return (dispatch, getState) => {
    return loadRestaurantsData().then((loadedData) => {
      dispatch(updateRestaurants(loadedData));
    });
  };
};
