import React from "react";
import classes from "./Hero.module.scss";
import ServivesHero from "../../assets/image/servivesHero.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>Obsługę nieruchomości wymyśliliśmy na nowo</h1>
      <div className={classes["img-wrapper"]}>
        <img src={ServivesHero} alt="servivesHero" />
      </div>
    </section>
  );
};

export default Hero;
