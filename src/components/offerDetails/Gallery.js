import React from "react";
import classes from "./gallery.module.scss";
import img1 from "../../assets/image/offerDetails/offer-1.jpg";
import img2 from "../../assets/image/offerDetails/offer-2.jpg";
import img3 from "../../assets/image/offerDetails/offer-3.jpg";
import img4 from "../../assets/image/offerDetails/offer-4.jpg";
import Slider from "react-slick";

import GalleryItem from "./GalleryItem";
function SampleNextArrow({ className, onClick }) {
  return (
    <div
      className={`${className} ${classes["next-arrow"]}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <div
      className={`${className} ${classes["prev-arrow"]}`}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
  infinite: true,
  arrow: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  dotsClass: `${classes["custom-dots"]}`,
  appendDots: (dots) => (
    <div>
      <ul className={classes["castom-dots"]}> {dots} </ul>
    </div>
  ),
};
const Gallery = () => {
  return (
    <section className={classes.wrapper}>
      <Slider className={classes.slider} {...settings}>
        <GalleryItem image={img1} />
        <GalleryItem image={img2} />
        <GalleryItem image={img3} />
        <GalleryItem image={img4} />
      </Slider>
    </section>
  );
};

export default Gallery;
