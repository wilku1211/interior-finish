import React from "react";
import classes from "./gallery.module.scss";

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
  dotsClass: `${classes["castom-dots"]}`,
  appendDots: (dots) => (
    <div>
      <ul> {dots} </ul>
    </div>
  ),
};
const Gallery = ({ images = [] }) => {
  return (
    <section className={classes.wrapper}>
      <Slider className={classes.slider} {...settings}>
        {images?.map((image, i) => (
          <GalleryItem key={image.image ? image.image : i} image={image} />
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
