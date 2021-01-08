import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import { IRestaurant } from "./common/types";
import { RestaurantContext } from "./context/restaurant/RestaurantContext";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import { getRestaurants } from "./services/api";
const App: React.FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [restaurant, setRestaurant] = useState<IRestaurant>();

  useEffect(() => {
    getRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants, restaurant,setRestaurant }}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/restaurant" component={Restaurant} />
          </Switch>
        </Router>
      </div>
    </RestaurantContext.Provider>
  );
};

export default App;
