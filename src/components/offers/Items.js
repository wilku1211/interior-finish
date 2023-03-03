import React from "react";
import classes from "./items.module.scss";
import Offer1 from "../../assets/image/offers/offer-1.jpg";
import Offer2 from "../../assets/image/offers/offer-2.jpg";
import Offer3 from "../../assets/image/offers/offer-3.jpg";
import Offer4 from "../../assets/image/offers/offer-4.jpg";

const Items = () => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <div className={classes["image-wrapper"]}>
            <img src={Offer1} alt="Offer1" />
          </div>
          <div className={classes.content}>
            <div className={classes["content-wrapper"]}>
              <h2>ROLNA 48</h2>
              <p>Apartament z tarasem na dachu</p>
            </div>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["image-wrapper"]}>
            <img src={Offer2} alt="Offer1" />
          </div>
          <div className={classes.content}>
            <div className={classes["content-wrapper"]}>
              <h2>ROLNA 48</h2>
              <p>Apartament z tarasem na dachu</p>
            </div>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["image-wrapper"]}>
            <img src={Offer3} alt="Offer1" />
          </div>
          <div className={classes.content}>
            <div className={classes["content-wrapper"]}>
              <h2>ROLNA 48</h2>
              <p>Apartament z tarasem na dachu</p>
            </div>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["image-wrapper"]}>
            <img src={Offer4} alt="Offer1" />
          </div>
          <div className={classes.content}>
            <div className={classes["content-wrapper"]}>
              <h2>ROLNA 48</h2>
              <p>Apartament z tarasem na dachu</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Items;
