import React from "react";
import classes from "./Caption.module.scss";
import Arrow from "../../assets/image/svg/Arrow";

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
      <a href="#services-items" className={classes.action}>
        <Arrow /> <span>Czytaj dalej</span>
      </a>
    </section>
  );
};

export default Caption;
