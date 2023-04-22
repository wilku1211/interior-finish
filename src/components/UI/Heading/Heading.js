import React from "react";
import classes from "./Heading.module.scss";
import TitleEffect from "../TitleEffect";

const Heading = ({
  title,
  isDecorated = false,
  isFullHeight = false,
  isAnimation = false,
}) => {
  return (
    <TitleEffect
      isAnimation={isAnimation}
      className={`${classes.h2} ${isDecorated ? classes.decorated : ""}  ${
        isFullHeight ? classes["full-height"] : ""
      }`}
    >
      {title}
    </TitleEffect>
  );
};

export default Heading;
