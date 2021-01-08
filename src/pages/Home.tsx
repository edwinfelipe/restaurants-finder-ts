import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "../components/layout/AppBar";
import Card from "../components/layout/Card";
import { RestaurantContext } from "../context/restaurant/RestaurantContext";

const Home: React.FC = (): JSX.Element => {
  const history = useHistory();
  const { restaurants, setRestaurant } = useContext(RestaurantContext);
  return (
    <Fragment>
      <AppBar />
      {restaurants.map((r: any) => (
        <Card
          key={r.id}
          id={r.id}
          onClick={() => {
            setRestaurant(r);
            history.push(`/restaurant/${r.id}`);
          }}
        />
      ))}
    </Fragment>
  );
};

export default Home;
