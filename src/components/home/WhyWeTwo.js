import React from "react";
import Item from "../Item";
import Header from "../UI/Heading/Heading";
import classes from "./WhyWeTwo.module.scss";

const WhyWeTwo = () => {
  return (
    <section className={classes.wrapper}>
      <Header title="Dlaczego szukasz właśnie nas?" isDecorated />
      <Item
        title={"Kompleksowa obsługa"}
        content={
          "Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy się"
        }
      />
      <Item
        title={"Agent na wyłączność"}
        content={
          "W powierzane nam zlecenia angażujemy się w 100% dzięki nam zaoszczędzisz maksimum czasu, zachowująć przy tym pełną kontrolę."
        }
      />
      <Item
        title={"Zgrany zespół"}
        content={
          "Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o zróżnicowanych kompetencjach, dzięki którym świetnie się uzupełniam"
        }
      />
    </section>
  );
};

export default WhyWeTwo;
