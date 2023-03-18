import React from "react";
import classes from "./desc.module.scss";

const Decs = ({ description = "" }) => {
  return (
    <section className={classes.wrapper}>
      <p>{description}</p>
    </section>
  );
};

export default Decs;
