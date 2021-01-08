import { createContext } from "react";
import { IRestaurant } from "../../common/types";

interface IRestaurantContext {
  restaurants: IRestaurant[];
  setRestaurants: Function;
  restaurant: IRestaurant | undefined;
  setRestaurant: Function;
}
export const RestaurantContext = createContext<IRestaurantContext>({
  restaurants: [],
  setRestaurants: (restaurants: IRestaurant[]) => {},
  restaurant: undefined,
  setRestaurant: (restaurant: IRestaurant) => {},
});
