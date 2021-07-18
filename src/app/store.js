import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import {
  RestaurantsReducer,
  selectedRestaurantReducer,
} from "../features/RestaurantsSlice";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    restaurantsData: RestaurantsReducer,
    selectedRestaurant: selectedRestaurantReducer,
  }),
  { restaurantsData: [], selectedRestaurant: {} },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
