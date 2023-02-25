import React from "react";
import { Link } from "react-router-dom";
import classes from "./filter.module.scss";

const Filter = () => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <Link to={"?filter=flat"}>Mieszkanie</Link>
        </li>
        <li className={classes.item}>
          <Link to={"?filter=house"}>Dom</Link>
        </li>
        <li className={classes.item}>
          <Link to={"?filter=buildingPlots"}>Działka</Link>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
