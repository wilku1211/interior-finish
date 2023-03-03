import React from "react";
import classes from "./items.module.scss";
import Item2 from "../../assets/image/realization/realization-2.jpg";
import Arrow from "../../assets/image/svg/Arrow";
import Heading from "../UI/Heading/Heading";
import Button from "../UI/Button/Button";

const OfferItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes.header}>
        <Heading title={"Oferta"} isDecorated isFullHeight />
        <p>
          Nieustannie powiększamy swoje portfolio i dodajemy nowe oferty.
          Sprawdź, czym zajmujemy się teraz.
        </p>
        <Button>
          Zobacz bieżące oferty <Arrow />
        </Button>
      </div>
      <div className={classes["image-wrapper"]}>
        <img src={Item2} alt="Item1" />
      </div>
    </li>
  );
};

export default OfferItem;
