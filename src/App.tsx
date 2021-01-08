import React, { useEffect, useState, useContext } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { IRestaurant } from "./common/types";
import AppBar from "./components/layout/AppBar";
import Card from "./components/layout/Card";
import { RestaurantContext } from "./context/restaurant/RestaurantContext";
import Home from "./pages/Home";
import { getRestaurants } from "./services/api";
const App: React.FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  useEffect(() => {
    getRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </RestaurantContext.Provider>
  );
};

export default App;
