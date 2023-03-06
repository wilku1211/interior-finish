import React from "react";
import classes from "./intro.module.scss";
import Heading from "../UI/Heading/Heading";
import IntroImage from "../../assets/image/realization//intro.png";

const Intro = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <Heading title="Poznaj nasze realizacje" isDecorated />
        <p>
          Każda współpraca to dla nas wspaniała przygoda, a to co po niej
          pozostaje, to pełna satysfakcja naszych klientów. Sprawdź, co udało
          nam się do tej pory osiągnąć.{" "}
        </p>
      </div>
      <div className={classes["image-wrapper"]}>
        <img src={IntroImage} alt="IntroImage" />
      </div>
    </section>
  );
};

export default Intro;
