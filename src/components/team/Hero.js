import React from "react";
import HeroImage from "../../assets/image/team/hero.jpg";
import classes from "./Hero.module.scss";
import Arrow from "../../assets/image/svg/Arrow";

const Hero = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <div>
          <h1>Poznajmy się</h1>
          <p>
            Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami
            współpracować.
          </p>
          <Arrow fill="white" />
        </div>
      </div>

      <div className={classes["img-wrapper"]}>
        <img src={HeroImage} alt="HeroImage" />
      </div>
    </section>
  );
};

export default Hero;
