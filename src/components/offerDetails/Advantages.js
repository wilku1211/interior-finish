import React from "react";
import Item1 from "../../assets/image/svg/offerDetails/Item1";
import Item2 from "../../assets/image/svg/offerDetails/Item2";
import Item3 from "../../assets/image/svg/offerDetails/Item3";
import Item4 from "../../assets/image/svg/offerDetails/Item4";
import Item5 from "../../assets/image/svg/offerDetails/Item5";
import classes from "./advantages.module.scss";

const Advantages = ({
  type = "",
  typeOffers = "",
  rooms = [],
  availability,
  area = "",
}) => {
  const rommStrong = () => {
    const string = [];
    for (const key in rooms) {
      const singlRoom = `${rooms[key]} ${key} / `;
      string.push(singlRoom);
    }
    return string.join("").slice(0, -2);
  };
  const date = new Date(+availability);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const displayDate = `${month} ${year}`;

  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item1 />
          </div>
          <div className={classes.content}>
            <h4>Typ budynku:</h4>
            <span>{type}</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item2 />
          </div>
          <div className={classes.content}>
            <h4>Pomieszczenia:</h4>
            <span>{rommStrong()}</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item3 />
          </div>
          <div className={classes.content}>
            <h4>Dostępność:</h4>
            <span>{displayDate}</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item4 />
          </div>
          <div className={classes.content}>
            <h4>Powierzchnia:</h4>
            <span>{area} m2</span>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes["icon-wrapper"]}>
            <Item5 />
          </div>
          <div className={classes.content}>
            <h4>Rodzaj oferty:</h4>
            <span>{typeOffers}</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
