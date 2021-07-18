import "./App.css";
import Header from "./components/Header";
import RestaurantsList from "./components/RestaurantsList";
import Map from "./components/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRestaurants } from "./features/RestaurantsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <RestaurantsList />
              <Map />
            </Route>
            <Route path="/:id" component={RestaurantDetail}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
