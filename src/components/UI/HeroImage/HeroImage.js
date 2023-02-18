import React from "react";
import classes from "./HeroImage.module.scss";

const HeroImage = ({ image, alt = "domyslny tytul" }) => {
  return (
    <div className={classes["image-wrapper"]}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default HeroImage;
