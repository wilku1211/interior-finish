import React from "react";
import classes from "./Button.module.scss";
const Button = ({ children, disabled }) => {
  return (
    <button className={classes.btn} disabled={disabled ? disabled : false}>
      {children}
    </button>
  );
};

export default Button;
