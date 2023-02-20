import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item";
import Header from "../UI/Heading/Heading";
import classes from "./Comfort.module.scss";
const Comfort = () => {
  return (
    <section className={classes.wrapper}>
      <Header
        title="Twój komfort ponad wszystko"
        isDecorated={true}
        percentDekorate={60}
      />
      <Link to="/">Sprawdź pełen zakres naszych usług </Link>
      <p>
        To, co dla innych biur nieruchomości wykracza poza zakres usług, dla nas
        jest standardem. Wyróżnia nas bezkompromisowa troska o interes klienta.
      </p>
      <Item
        title="Pośrednictwo"
        content="Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości"
      />
      <Item
        title="Doradztwo"
        content="Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń. "
      />
      <Item
        title="Home staging"
        content="Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura podnosi atrakcyjność oferty na rynku."
      />
      <Item
        title="Współpraca z najlepszymi"
        content="Poznański rynek znamy jak własną kieszeń – współpracując z nami wybierasz najlepszych deweloperów, prawników i architektów."
      />
    </section>
  );
};

export default Comfort;
/* shape */
