import React from "react";
import classes from "./Heading.module.scss";
const Heading = ({ title, isDecorated = false, isFullHeight = false }) => {
  return (
    <h2
      className={`${classes.h2} ${isDecorated ? classes.decorated : ""}  ${
        isDecorated ? classes["full-height"] : ""
      }`}
    >
      {title}
    </h2>
  );
};

export default Heading;
