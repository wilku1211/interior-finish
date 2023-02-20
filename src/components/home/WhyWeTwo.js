import React from "react";
import classes from "./WhyWeTwo.module.scss";

const WhyWeTwo = () => {
  return (
    <section className={classes.wrapper}>
      <h2>Dlaczego szukasz właśnie nas?</h2>
      <div className={classes.item}>
        <span>Kompleksowa obsługa</span>
        <p>
          Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy się
          Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.
        </p>
      </div>
      <div className={classes.item}>
        <span>Agent na wyłączność</span>
        <p>
          W powierzane nam zlecenia angażujemy się w 100% dzięki nam
          zaoszczędzisz maksimum czasu, zachowująć przy tym pełną kontrolę.
        </p>
      </div>
      <div className={classes.item}>
        <span>Zgrany zespół</span>
        <p>
          Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o zróżnicowanych
          kompetencjach, dzięki którym świetnie się uzupełniamy
        </p>
      </div>
    </section>
  );
};

export default WhyWeTwo;
