import React from "react";
import classes from "./Hero.module.scss";
import ServivesHero from "../../assets/image/servivesHero.jpg";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <h1>Obsługę nieruchomości wymyśliliśmy na nowo</h1>
      </div>
      <div className={classes["img-wrapper"]}>
        <img src={ServivesHero} alt="servivesHero" />
      </div>
    </section>
  );
};

export default Hero;
