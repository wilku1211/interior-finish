import React from "react";
import Comfort from "../components/home/Comfort";

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
    </>
  );
};

export default Index;
