import React from "react";
import classes from "./Offer.module.scss";
import FirstImage from "../../assets/image/index/offer1.jpg";
import TwoImage from "../../assets/image/index/offer2.jpg";
import TreeImage from "../../assets/image/index/offer3.jpg";
import FourImage from "../../assets/image/index/offer4.jpg";

const Offer = () => {
  return (
    <section className={classes.wrapper}>
      <h2>Oferta</h2>
      <div className={classes.fillter}>
        <button>BIEŻĄCE OFERTY</button>
        <button>NASZE REALIZACJE</button>
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
