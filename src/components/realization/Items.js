import React from "react";
import Heading from "../UI/Heading/Heading";
import classes from "./items.module.scss";

import OfferItem from "./OfferItem";

const Items = ({ realizations = [] }) => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        {realizations &&
          realizations.map((realization) => (
            <li className={classes.item}>
              <div className={classes.header}>
                <Heading title={realization.street} isDecorated isFullHeight />
                <p>{realization.description}</p>
              </div>
              <div className={classes["image-wrapper"]}>
                <img src={realization.image} alt="Item1" />
              </div>
            </li>
          ))}

        {/*  <OfferItem /> */}
      </ul>
    </section>
  );
};

export default Items;
