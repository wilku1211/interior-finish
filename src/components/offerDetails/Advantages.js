import React from "react";
import Item1 from "../../assets/image/svg/offerDetails/Item1";
import Item2 from "../../assets/image/svg/offerDetails/Item2";
import Item3 from "../../assets/image/svg/offerDetails/Item3";
import Item4 from "../../assets/image/svg/offerDetails/Item4";
import Item5 from "../../assets/image/svg/offerDetails/Item5";
import classes from "./advantages.module.scss";

const Advantages = () => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item1 />
          </div>
          <div className={classes.content}>
            <h4>Typ budynku:</h4>
            <span>blok</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item2 />
          </div>
          <div className={classes.content}>
            <h4>Pomieszczenia:</h4>
            <span>4 pokoje / 2 łazienki</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item3 />
          </div>
          <div className={classes.content}>
            <h4>Dostępność:</h4>
            <span>Styczeń 2022</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item4 />
          </div>
          <div className={classes.content}>
            <h4>Powierzchnia:</h4>
            <span>95m2</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item5 />
          </div>
          <div className={classes.content}>
            <h4>Rodzaj oferty:</h4>
            <span>wynajem</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
