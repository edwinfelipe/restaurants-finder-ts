import axios from "axios";

export interface IRestaurant {
  id: number;
  name: string;
  neighborhood: string;
  picture: string;
  latlng: {
    lat: number;
    lng: number;
  };
  cuisine_type: string;
  operating_hours: {
    Sunday: string;
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
  };
  reviews: [{ name: string; date: string; rating: number; comments: string }];
}
export const getRestaurants = async (): Promise<[IRestaurant]> => {
  return (await axios.get("/api/restaurant-data.json")).data.restaurants;
};
