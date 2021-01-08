import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import { IRestaurant } from "./common/types";
import AppBar from "./components/layout/AppBar";
import Card from "./components/layout/Card";
import { RestaurantContext } from "./context/restaurant/RestaurantContext";
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
        <AppBar />
        {restaurants.map((r: any) => (
          <Card key={r.id} id={r.id} />
        ))}
      </div>
    </RestaurantContext.Provider>
  );
};

export default App;
