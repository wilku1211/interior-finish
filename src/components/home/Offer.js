import React from "react";
import classes from "./Offer.module.scss";
import FirstImage from "../../assets/image/index/offer1.jpg";
import TwoImage from "../../assets/image/index/offer2.jpg";
import TreeImage from "../../assets/image/index/offer3.jpg";
import FourImage from "../../assets/image/index/offer4.jpg";
import Header from "../UI/Heading/Heading";
import Button from "../UI/Button/Button";

const Offer = () => {
  return (
    <section className={classes.wrapper}>
      <Header title="Offerta" />
      <div className={classes.fillter}>
        <Button title="BIEŻĄCE OFERTY" />
        <Button title="NASZE REALIZACJE" />
      </div>
      <div className={classes.gallery}>
        <div>
          <img src={FirstImage} alt="FirstImage" />
        </div>
        <div>
          <img src={TwoImage} alt="TwoImage" />
        </div>
        <div>
          <img src={FourImage} alt="FourImage" />
        </div>
        <div>
          <img src={TreeImage} alt="TreeImage" />
        </div>
      </div>
    </section>
  );
};

export default Offer;
