import axios from "axios";
import { IRestaurant } from "../common/types";

export const getRestaurants = async (): Promise<[IRestaurant]> => {
  return (await axios.get("/api/restaurant-data.json")).data.restaurants.map((r: IRestaurant)=>{
    let ratting = 0;
    for(let review of r.reviews){
      ratting += review.rating
    }
    r.ratting = (ratting / r.reviews.length).toFixed(1);
    return r;
  });
};
