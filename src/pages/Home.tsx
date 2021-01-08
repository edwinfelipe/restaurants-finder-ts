import React, { Fragment, useContext } from "react";
import AppBar from "../components/layout/AppBar";
import Card from "../components/layout/Card";
import { RestaurantContext } from "../context/restaurant/RestaurantContext";

const Home: React.FC = (): JSX.Element => {
  const { restaurants } = useContext(RestaurantContext);
  return (
    <Fragment>
      <AppBar />
      {restaurants.map((r: any) => (
        <Card key={r.id} id={r.id} />
      ))}
    </Fragment>
  );
};

export default Home;
