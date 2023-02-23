import React from "react";
import Heading from "../UI/Heading/Heading";
import classes from "./items.module.scss";
import Item1 from "../../assets/image/realization/realization-1.jpg";
import Item3 from "../../assets/image/realization/realization-3.jpg";
import Item4 from "../../assets/image/realization/realization-4.jpg";
import OfferItem from "./OfferItem";

const Items = () => {
  return (
    <section className={classes.wrapper}>
      <ul>
        <li className={classes.item}>
          <Heading title={"Polna 38"} isDecorated isFullHeight />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
            accusantium debitis repellat consectetur error omnis, consequatur
            nesciunt dolores facilis, perspiciatis.
          </p>
          <div className={classes["image-wrapper"]}>
            <img src={Item1} alt="Item1" />
          </div>
        </li>
        <OfferItem />
        <li className={classes.item}>
          <Heading title={"Sienkiewicza 8"} isDecorated isFullHeight />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
            accusantium debitis repellat consectetur error omnis, consequatur
            nesciunt dolores facilis, perspiciatis impedit nisi.
          </p>
          <div className={classes["image-wrapper"]}>
            <img src={Item3} alt="Item1" />
          </div>
        </li>
        <li className={classes.item}>
          <Heading title={"Wojska Polskiego 9"} isDecorated isFullHeight />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
            mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
            accusantium debitis repellat consectetur error omnis, consequatur
            nesciunt dolores facilis, perspiciatis impedit nisi.
          </p>
          <div className={classes["image-wrapper"]}>
            <img src={Item4} alt="Item1" />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Items;
