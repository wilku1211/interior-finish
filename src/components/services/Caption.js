import React from "react";
import classes from "./Caption.module.scss";
import Arrow from "../../assets/image/svg/Arrow";
import { Link } from "react-router-dom";

const Caption = () => {
  return (
    <section className={classes.caption}>
      <div className={classes.content}>
        <p>
          Poziom zaangażowania i zakres usług Modern Studio wykracza daleko poza
          to, co oferują inne biura nieruchomości - sprawdź, jak możemy Ci
          pomóc.
        </p>
      </div>
      <Link className={classes.action}>
        <Arrow /> <span>Czytaj dalej</span>
      </Link>
    </section>
  );
};

export default Caption;
