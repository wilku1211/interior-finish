import React from "react";
import CornerEffect from "../UI/CornerEffect";
import Heading from "../UI/Heading/Heading";
import classes from "./items.module.scss";

const Items = ({ realizations = [] }) => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        {realizations &&
          realizations.map((realization) => (
            <li className={classes.item} key={realization.street}>
              <div className={classes.header}>
                <Heading
                  title={realization.street}
                  isDecorated
                  isFullHeight
                  isAnimation
                />
                <p>{realization.description}</p>
              </div>
              <CornerEffect className={classes["image-wrapper"]}>
                <img src={realization.image} alt="Item1" />
              </CornerEffect>
            </li>
          ))}

        {/*  <OfferItem /> */}
      </ul>
    </section>
  );
};

export default Items;
