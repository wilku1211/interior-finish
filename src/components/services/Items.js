import React from "react";
import classes from "./Items.module.scss";
import Heading from "../UI/Heading/Heading";
import Item1 from "../../assets/image/svg/services/Item1";
import Item2 from "../../assets/image/svg/services/Item2";
import Item3 from "../../assets/image/svg/services/Item3";
import Item4 from "../../assets/image/svg/services/Item4";
import Item5 from "../../assets/image/svg/services/Item5";
import Item6 from "../../assets/image/svg/services/Item6";

const Items = () => {
  return (
    <section className={classes.wrapper}>
      <Heading title={"Jak możemy Ci pomóc?"} isDecorated />
      <ul className={classes.items}>
        <li className={classes.item}>
          <div className={classes["svg-wrapper"]}>
            <Item1 />
          </div>
          <h4>Pośrednictwo w obrocie nieruchomościami</h4>
          <p>
            Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży,
            zakupie, wynajmie lub najmie nieruchomości.
          </p>
        </li>
        <li className={classes.item}>
          <div className={classes["svg-wrapper"]}>
            <Item2 />
          </div>
          <h4>Kompleksowe doradztwo</h4>
          <p>
            Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi,
            zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.
          </p>
        </li>
        <li className={classes.item}>
          <div className={classes["svg-wrapper"]}>
            <Item4 />
          </div>
          <h4>Współpraca z deweloperem</h4>
          <p>
            Pośrednictwo w zakresie sprzedaży inwestycji deweloperskiej (pełen
            zakres, znajomość lokalnych inwestycji/pewność wysokiej jakości
            wykonania)
          </p>
        </li>
        <li className={classes.item}>
          <div className={classes["svg-wrapper"]}>
            <Item6 />
          </div>
          <h4>Współpraca z architektem</h4>
          <p>
            Współpraca z zaprzyjaźnionym biurem architektonicznym w zakresie
            projektowania wnętrz (zarówno prywatnych jak i komercyjnych) i
            kompleksowej usługi wykończenie pod klucz.
          </p>
        </li>
        <li className={classes.item}>
          <div className={classes["svg-wrapper"]}>
            <Item5 />
          </div>
          <h4>Współpraca z inwestorem</h4>
          <p>
            Kompleksowa obsługa klienta poszukującego nieruchomości w celach
            inwestycyjnych (lokata kapitału, analiza rynku).
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Items;
