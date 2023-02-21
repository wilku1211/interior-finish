import React from "react";
import classes from "./Button.module.scss";
const Button = ({ title, disabled }) => {
  return (
    <button className={classes.btn} disabled={disabled ? disabled : false}>
      {title}
    </button>
  );
};

export default Button;
