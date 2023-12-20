import React from "react";
import Hero from "../../sections/hero/Hero";
import TransactionDetails from "../../sections/TransactionDetails";
import Featured from "../../sections/featured/Featured";
import Discover from "../../sections/discover/Discover";
import CreateAndSell from "../../sections/createAndSell/CreateAndSell";
import TopCollections from "../../sections/topCollections/TopCollections";

const Home = () => {
  return (
    <>
      <Hero />
      <TransactionDetails />
      <TopCollections />
      <Featured />
      <CreateAndSell />
      <Discover />
    </>
  );
};

export default Home;
