import React from "react";

interface IRatter {
  ratting: string;
}
const Ratter: React.FC<IRatter> = ({ ratting }): JSX.Element => {
  return (
    <div className="inline-flex items-center">
      <span className={`text-md font-bold text-${parseInt(ratting)>= 4? 'green' : 'yellow'}-400`}>{ratting}</span>
      <img className="w-5 h-5 mb-1" src="/icons/star.svg" alt="stars"/>
    </div>
  );
};

export default Ratter;
