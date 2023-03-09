import React from "react";
import Advantages from "../components/offerDetails/Advantages";
import Gallery from "../components/offerDetails/Gallery";
import Guardian from "../components/offerDetails/Guardian";
import Intro from "../components/offerDetails/Intro";

const OfferDetails = () => {
  return (
    <>
      <Intro />
      <Gallery />
      <Advantages />
      <Guardian />
    </>
  );
};

export default OfferDetails;
