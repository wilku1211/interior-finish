import React from "react";
import classes from "./Caption.module.scss";
import Arrow from "../../assets/image/svg/Arrow";

const Caption = () => {
  return (
    <section className={classes.caption}>
      <p>
        Poziom zaangażowania i zakres usług Modern Studio wykracza daleko poza
        to, co oferują inne biura nieruchomości - sprawdź, jak możemy Ci pomóc.
      </p>
      <div>
        <Arrow /> <span>Czytaj dalej</span>
      </div>
    </section>
  );
};

export default Caption;
