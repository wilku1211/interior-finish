import React from "react";
import Heading from "../UI/Heading/Heading";
import classes from "./intro.module.scss";
const Intro = ({ title = "", street = "" }) => {
  return (
    <section className={classes.wrapper}>
      <span>{street}</span>
      <Heading title={title} isDecorated />
    </section>
  );
};

export default Intro;
