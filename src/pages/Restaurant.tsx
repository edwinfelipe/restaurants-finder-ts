import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/restaurant/RestaurantContext";

const Restaurant: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { restaurant, restaurants, setRestaurant } = useContext(
    RestaurantContext
  );

  useEffect(() => {
    setRestaurant(restaurants.find((r) => r.id === parseInt(id)));
  }, [setRestaurant, restaurants, id]);
  return <h1>{restaurant?.name}</h1>;
};

export default Restaurant;
