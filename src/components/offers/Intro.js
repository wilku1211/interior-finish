import React from "react";
import classes from "./intro.module.scss";
import Heading from "../UI/Heading/Heading";
const Intro = () => {
  return (
    <section className={classes.wrapper}>
      <Heading title="Nasza oferta" isDecorated isFullHeight />
      <p>
        Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ
        nieruchomości, który Cię interesuje.
      </p>
    </section>
  );
};

export default Intro;
