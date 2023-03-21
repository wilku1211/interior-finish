import React from "react";

import AboutUs from "../components/home/AboutAs";
import Comfort from "../components/home/Comfort";
import Contact from "../components/home/Contact";

import Hero from "../components/home/Hero";
import Offer from "../components/home/Offer";
import Team from "../components/home/Team";
import WhyWe from "../components/home/WhyWe";
import WhyWeTwo from "../components/home/WhyWeTwo";

const Index = () => {
  return (
    <>
      <Hero />
      <WhyWe />
      <WhyWeTwo />
      <Offer />
      <Comfort />
      <Team />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Index;
