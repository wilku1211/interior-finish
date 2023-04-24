import React from "react";

import HeroDesktop from "../../assets/image/index/hero-desktop.webp";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes["hero-wrapper"]}>
      <div className={classes["content-wrapper"]}>
        <h1>Biuro nieruchomości, którego potrzebujesz</h1>
        <p>Sprawdź, co oznacza dla nas</p>
        <p>bezkonkurencyjność.</p>
      </div>
      <div className={classes["image-wrapper"]}>
        <img src={HeroDesktop} alt="HeroDesktop" />
      </div>
    </section>
  );
};

export default Hero;
