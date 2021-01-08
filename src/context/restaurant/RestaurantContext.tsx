import React, { createContext, useState } from "react";
import { IRestaurant } from "../../common/types";

interface IRestaurantContext  {
  restaurants: IRestaurant[];
  setRestaurants: Function;
};
export const RestaurantContext = createContext<IRestaurantContext>({
  restaurants: [],
  setRestaurants: (restaurants: IRestaurant[]) => {},
});
