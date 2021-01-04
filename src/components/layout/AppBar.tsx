import React from "react";
const AppBar: React.FC = (): JSX.Element => {
  return (
    <div className="px-2 py-4 flex bg-white shadow-md">
      <h1 className="text-black-300 flex-grow font-bold text-xl">
        Restaurants
      </h1>
      <ul className="flex items-center">
        <li className="px-1">
          <img className="w-6 h-6" src="icons/search.svg"/>
        </li>
        <li className="px-1">
        <img className="w-6 h-6" src="icons/filter.svg"/>
        </li>
      </ul>
    </div>
  );
};

export default AppBar;
