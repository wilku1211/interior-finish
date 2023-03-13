import React from "react";
import Advantages from "../components/offerDetails/Advantages";
import Gallery from "../components/offerDetails/Gallery";
import Guardian from "../components/offerDetails/Guardian";
import Intro from "../components/offerDetails/Intro";
import Desc from "../components/offerDetails/Desc";
import classes from "./offerDetails.module.scss";

const OfferDetails = () => {
  return (
    <div className={classes.wrapper}>
      <Intro />
      <Gallery />
      <Desc />
      <Advantages />
      <Guardian />
    </div>
  );
};

export default OfferDetails;
