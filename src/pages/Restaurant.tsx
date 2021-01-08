import React, { useContext } from "react";
import { RestaurantContext } from "../context/restaurant/RestaurantContext";

const Restaurant: React.FC = (): JSX.Element => {
  const { restaurant } = useContext(RestaurantContext);
  return <div>{restaurant?.name}</div>;
};

export default Restaurant;
