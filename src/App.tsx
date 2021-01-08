import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { IRestaurant } from "./common/types";
import { RestaurantContext } from "./context/restaurant/RestaurantContext";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import { getRestaurants } from "./services/api";
const App: React.FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getRestaurants().then((data) => {
      setRestaurants(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Router>
      <RestaurantContext.Provider
        value={{ restaurants, setRestaurants, restaurant, setRestaurant }}
      >
        {isLoading ? (
          <h5>Loading...</h5>
        ) : (
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/restaurant/:id" component={Restaurant} />
            </Switch>
          </div>
        )}
      </RestaurantContext.Provider>
    </Router>
  );
};

export default App;
