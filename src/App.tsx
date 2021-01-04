import React, { useEffect, useState } from "react";
import "./App.css";
import AppBar from "./components/layout/AppBar";
import Card from "./components/layout/Card";
import { getRestaurants, IRestaurant } from "./services/api";
const App: React.FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  useEffect(() => {
    getRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []);
  return (
    <div className="App">
      <AppBar />
      {restaurants.map((r) => (
        <Card key={r.id} />
      ))}
    </div>
  );
};

export default App;
