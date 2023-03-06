import React from "react";
import Heading from "../UI/Heading/Heading";
import classes from "./items.module.scss";
import Item1 from "../../assets/image/realization/realization-1.jpg";
import Item2 from "../../assets/image/realization/realization-2.jpg";
import Item3 from "../../assets/image/realization/realization-3.jpg";
import Item4 from "../../assets/image/realization/realization-4.jpg";
import OfferItem from "./OfferItem";

const Items = () => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <div className={classes.header}>
            <Heading title={"Polna 38"} isDecorated isFullHeight />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
              mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
              accusantium debitis repellat consectetur error omnis, consequatur
              nesciunt dolores facilis, perspiciatis.
            </p>
          </div>
          <div className={classes["image-wrapper"]}>
            <img src={Item1} alt="Item1" />
          </div>
        </li>

        <li className={classes.item}>
          <div className={classes.header}>
            <Heading title={"Polna 38"} isDecorated isFullHeight />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
              mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
              accusantium debitis repellat consectetur error omnis, consequatur
              nesciunt dolores facilis, perspiciatis.
            </p>
          </div>
          <div className={classes["image-wrapper"]}>
            <img src={Item2} alt="Item2" />
          </div>
        </li>

        <li className={classes.item}>
          <div className={classes.header}>
            <Heading title={"Polna 38"} isDecorated isFullHeight />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
              mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
              accusantium debitis repellat consectetur error omnis, consequatur
              nesciunt dolores facilis, perspiciatis.
            </p>
          </div>
          <div className={classes["image-wrapper"]}>
            <img src={Item3} alt="Item3" />
          </div>
        </li>

        <li className={classes.item}>
          <div className={classes.header}>
            <Heading title={"Polna 38"} isDecorated isFullHeight />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia
              mollitia minus obcaecati optio! Repellendus, voluptas. Nihil
              accusantium debitis repellat consectetur error omnis, consequatur
              nesciunt dolores facilis, perspiciatis.
            </p>
          </div>
          <div className={classes["image-wrapper"]}>
            <img src={Item4} alt="Item4" />
          </div>
        </li>

        {/*  <OfferItem /> */}
      </ul>
    </section>
  );
};

export default Items;
