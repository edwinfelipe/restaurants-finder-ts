import React from "react";
import Ratter from "./Ratter";

const Card: React.FC = (): JSX.Element => {
  return (
    <div className="flex p-4 mx-4 items-center border-gray-200 border-b-2">
      <div className="flex flex-col items-center">
        <img className="w-12 h-12 rounded"/>
        <span className="text-gray-400 font-bold text-xs pt-1">Asian</span>
      </div>
      <div className="flex-grow ml-4">
        <h4 className="font-bold">Mission chinnese food</h4>
        <div>
          <Ratter/> <span>(3 opinions)</span>
        </div>
        <span className="text-xs text-red-600 font-bold">Closed</span>
      </div>
      <img  className="w-6 h-6" src="/icons/right-arrow.svg"/>
    </div>
  );
};

export default Card;
