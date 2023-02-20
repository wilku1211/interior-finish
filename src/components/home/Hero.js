import React from "react";
import HeroImage from "../UI/HeroImage/HeroImage";
import HeroImg from "../../assets/image/index/Hero.jpg";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes["hero-wrapper"]}>
      <HeroImage image={HeroImg} />
      <div className={classes["backdrop"]}></div>
      <div className={classes["content-wrapper"]}>
        <h1>Biuro nieruchomości, którego potrzebujesz</h1>
        <p>Sprawdź, co oznacza dla nas</p>
        <p>bezkonkurencyjność.</p>
      </div>
    </section>
  );
};

export default Hero;
