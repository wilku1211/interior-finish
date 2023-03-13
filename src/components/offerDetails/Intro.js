import React from "react";
import Heading from "../UI/Heading/Heading";
import classes from "./intro.module.scss";
const Intro = () => {
  return (
    <section className={classes.wrapper}>
      <span>ROLNA 48</span>
      <Heading title="Apartament z tarasem na dachu" isDecorated />
    </section>
  );
};

export default Intro;
