import { db } from "../firebase";

export const loadRestaurantsData = () => {
  return new Promise((resolve, reject) => {
    const restaurantsData = [];
    db.collection("restaurantsData")
      .where("rating", ">=", 0)
      .orderBy("rating", "desc")
      .onSnapshot((snapshot) => {
        snapshot.forEach((restaurant) => {
          restaurantsData.push(restaurant.data());
        });
        resolve(restaurantsData);
      });
  });
};

export const updateRestaurantData = () => {
  return new Promise((resolve, reject) => {});
};
