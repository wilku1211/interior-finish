import React, { Suspense, params, useContext, useEffect } from "react";

import { useLoaderData, defer, Await } from "react-router-dom";
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
import TeamMemberContext from "../store/teamMembers-context";
const OfferDetails = () => {
  const { offer } = useLoaderData();

  return (
    <Suspense fallback={<p>Loadind...</p>}>
      <Await resolve={offer}>
        {(loadOffer) => (
          <div className={classes.wrapper}>
            <Intro title={loadOffer.title} street={loadOffer.street} />
            <Gallery images={loadOffer.image} />
            <Desc description={loadOffer.description} />
            <Advantages
              type={loadOffer.type}
              typeOffers={loadOffer.typeOffers}
              rooms={loadOffer.rooms}
              availability={loadOffer.availability}
              area={loadOffer.area}
            />
            <Guardian teamMemberId={loadOffer.teamMember} />
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default OfferDetails;

export async function loader({ request, params }) {
  const id = params.offerId;
  return defer({
    offer: await getSingleOffer(id),
  });
}
