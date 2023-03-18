import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleOffer } from "../lib/api";
import NoTeamFound from "../components/UI/NoTeamFound";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

import Advantages from "../components/offerDetails/Advantages";
import Gallery from "../components/offerDetails/Gallery";
import Guardian from "../components/offerDetails/Guardian";
import Intro from "../components/offerDetails/Intro";
import Desc from "../components/offerDetails/Desc";
import classes from "./offerDetails.module.scss";
import { useParams } from "react-router-dom";

const OfferDetails = () => {
  const { sendRequest, status, data, error } = useHttp(getSingleOffer, true);
  const { offerId } = useParams();

  useEffect(() => {
    sendRequest(offerId);
  }, [sendRequest, offerId]);

  if (status === "pending") {
    return (
      <section className={classes.loading}>
        <LoadingSpinner />
      </section>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    return <NoTeamFound />;
  }
  return (
    <div className={classes.wrapper}>
      <Intro title={data.title} street={data.street} />
      <Gallery images={data.image} />
      <Desc description={data.description} />
      <Advantages
        type={data.type}
        typeOffers={data.typeOffers}
        rooms={data.rooms}
        availability={data.availability}
        area={data.area}
      />
      <Guardian teamMemberId={data.teamMember} />
    </div>
  );
};

export default OfferDetails;
