import React from "react";
import Filter from "../components/offers/Filter";
import Intro from "../components/offers/Intro";
import Items from "../components/offers/Items";
import AddNew from "../components/offers/AddNew";

const Offers = () => {
  return (
    <>
      <AddNew />
      <Intro />
      <Filter />
      <Items />
    </>
  );
};

export default Offers;
