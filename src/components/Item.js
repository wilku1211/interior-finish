import React from "react";
import classes from "./Item.module.scss";
const Item = ({ title, content }) => {
  return (
    <div className={classes.wrapper}>
      <span>{title}</span>
      <p>{content}</p>
    </div>
  );
};

export default Item;
