import React from "react";
import Item from "../Item";
import Heading from "../UI/Heading/Heading";
import classes from "./WhyWeTwo.module.scss";
const WhyWeTwo = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.wrapper}>
          <Heading
            title="Dlaczego szukasz właśnie nas?"
            isDecorated
            isAnimation
          />
        </div>
      </section>
      <section className={classes.wrapper}>
        <div className={classes.items}>
          <Item
            title={"Kompleksowa obsługa"}
            content={
              "Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas."
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
        </div>
      </section>
    </>
  );
};

export default WhyWeTwo;
