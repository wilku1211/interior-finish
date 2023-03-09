import React from "react";
import classes from "./gallery.module.scss";
import img from "../../assets/image/offers/offer-4.jpg";

const Gallery = () => {
  return (
    <section className={classes.wrapper}>
      <div>
        <div>
          <img src={img} alt="img" />
        </div>
      </div>
      <div className={classes.content}>
        <p>
          Pomimo braku dostępu do morza w Poznaniu, jak widać za oknem, dla nas
          nie ma rzeczy niemożliwych. Wyjątkowe mieszkanie z widokiem, którego
          nie da się zapomnieć.{" "}
        </p>
      </div>
    </section>
  );
};

export default Gallery;
