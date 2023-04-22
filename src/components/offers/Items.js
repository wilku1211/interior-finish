import React from "react";
import classes from "./items.module.scss";

import { Link } from "react-router-dom";
import CornerEffect from "../UI/CornerEffect";

const Items = ({ offers = [] }) => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        {offers.map((offer, i) => (
          <li
            key={offer.id}
            className={`${classes.item} ${classes[`item-${i}`]}`}
          >
            <Link to={offer.id}>
              <CornerEffect className={classes["image-wrapper"]}>
                <img src={offer.image[1]} alt="Offer1" />
              </CornerEffect>
              <div className={classes.content}>
                <div className={classes["content-wrapper"]}>
                  <h2>{offer.street}</h2>
                  <p>{offer.title}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Items;
