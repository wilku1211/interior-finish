import React from "react";
import classes from "./gallery.module.scss";
import img1 from "../../assets/image/offerDetails/offer-1.jpg";
import img2 from "../../assets/image/offerDetails/offer-2.jpg";
import img3 from "../../assets/image/offerDetails/offer-3.jpg";
import img4 from "../../assets/image/offerDetails/offer-4.jpg";
import Slider from "react-slick";

import GalleryItem from "./GalleryItem";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrow: true,
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
