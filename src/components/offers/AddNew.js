import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { addOffer } from "../../lib/api";

const AddItem = () => {
  const history = useNavigate();

  const { sendRequest, status } = useHttp(addOffer);
  useEffect(() => {
    if (status === "completed") {
      history.push("/offers");
    }
  }, [status, history]);

  const onAddQuoteHandler = (quateData) => {
    const newItem = {
      image: [
        "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/polna-1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/polna-2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/polna-3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/react-rest-3374a.appspot.com/o/polna-4.jpg?alt=media",
      ],
      street: "Polna 96",
      title: "Mieszkanie w centrum Gdańska",
      description:
        "Budynek wchodzący w skład Osiedla Szaniec będzie wyposażony w cichobieżne windy we wszystkich klatkach rozpoczynające swój bieg od poziomu hali garażowej poprzez przestronne klatki schodowe. Dodatkowym atutem jest duża ilość miejsc postojowych w hali garażowej, komórek lokatorskich oraz miejsc zewnętrznych.",
      type: "apartment",
      rooms: {
        rooms: 3,
        kitchens: 1,
        bathrooms: 1,
      },
      availability: "1689992256300",
      area: "68.5",
      typeOffers: "purchase",
      teamMember: "-NQfcFTviHZH2ptBA31L",
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
