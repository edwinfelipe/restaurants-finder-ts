import React, { useContext } from "react";
import { RestaurantContext } from "../../context/restaurant/RestaurantContext";
import Ratter from "./Ratter";
interface ICard {
  id: number;
}
const Card: React.FC<ICard> = ({ id }): JSX.Element => {
  const { restaurants } = useContext(RestaurantContext);
  const { name, reviews, ratting, cuisine_type, picture } = restaurants.find((r) => r.id === id) || {};
  return (
    <div className="flex p-4 mx-4 items-center border-gray-200 border-b-2">
      <div className="flex flex-col items-center">
        <img src={`/images/small/${picture}`} className="w-12 h-12 rounded" />
        <span className="text-gray-400 font-bold text-xs pt-1">{cuisine_type}</span>
      </div>
      <div className="flex-grow ml-4">
        <h4 className="font-bold">{name}</h4>
        <div>
          <Ratter ratting={ratting || '5'} /> <span>({reviews?.length} opinions)</span>
        </div>
        <span className="text-xs text-red-600 font-bold">Closed</span>
      </div>
      <img className="w-6 h-6" src="/icons/right-arrow.svg" />
    </div>
  );
};

export default Card;
