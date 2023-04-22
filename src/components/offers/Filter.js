import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./filter.module.scss";

const Filter = ({ type = false }) => {
  return (
    <section className={classes.wrapper}>
      <ul className={classes.items}>
        <li className={classes.item}>
          <NavLink
            to={"?filter=flat"}
            className={type === "flat" ? classes.active : undefined}
          >
            Mieszkanie
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to={"?filter=house"}
            className={type === "house" ? classes.active : undefined}
          >
            Dom
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to={"?filter=buildingPlots"}
            className={type === "buildingPlots" ? classes.active : undefined}
          >
            Działka
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
