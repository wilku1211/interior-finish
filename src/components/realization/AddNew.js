import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { addRealization } from "../../lib/api";

const AddItem = () => {
  const history = useNavigate();

  const { sendRequest, status } = useHttp(addRealization);
  useEffect(() => {
    if (status === "completed") {
      history.push("/offers");
    }
  }, [status, history]);

  const onAddQuoteHandler = (quateData) => {
    const newItem = {
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/realization-5.jpg?alt=media",
      street: "Pionierów 1",
      description: `Piękne mieszkanie w jednej z najdynamiczniej rozwijających się dzielnic Gdańska. Usytuowane w zacisznej i spokojnej okolicy, z dostępem do dużego ogrodu i świetnymi połączeniami zarówno do centrum miasta, jak i obwodnicy Trójmiasta.`,
    };
    sendRequest(newItem);
  };
  return (
    <>
      <button onClick={onAddQuoteHandler}>add</button>
    </>
  );
};

export default AddItem;
/* {

image:[],
street:"",
title:""
description:""
type:"",//[apartment, house,buildingPlot ],
Rooms:{
  pokój:int,
},
availability:date,
area int
typeOffers:""//[rent,purchase ]
teamMember:'id'


}
 */
const singleOffer = {
  image: [
    "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/offer-3-1.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/offer-3-4.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/offer-3-2.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/offer-3-3.jpg?alt=media",
  ],
  street: "Ełk, nowy świat",
  title: "Działka budowlana",
  description: `Do sprzedaży atrakcyjna działka o powierzchni 1230 m2 bezpośrednio przy miejscowości Ełk, powiat warszawski zachodni. Działka przewiduje zabudowę mieszkaniową jednorodzinną wolnostojącą lub bliźniaczą. Działka częściowo zadrzewiona młodymi brzozami i sosnami. Obok dorosły las. Sąsiedztwo Puszczy Kampinoskiej powoduje, że okolica jest szczególnie chroniona. Teren jest suchy i równy. W otulinie Parku Narodowego w odległości 200 m znajduje się jezioro. Wymiary działki to: długość - 40m, szerokość - 39 m..
    Media:
    Prąd : 50 m od granicy działki
    Wodociąg: 70 m od granicy działki
    Kanalizacja: 200 m od granicy działki`,
  type: "house",
  media: {
    powerConnection: "50",

    waterSupply: "70",
    sewers: "200",
  },
  availability: "1689992256300",
  area: "1230",
  typeOffers: "purchase",
  teamMember: "-NQfdsGDVCtDf0yrbqVx",
};
