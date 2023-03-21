import React from "react";
import { Suspense } from "react";

import { useLoaderData, defer, Await } from "react-router-dom";
import Filter from "../components/offers/Filter";
import Intro from "../components/offers/Intro";
import Items from "../components/offers/Items";
import AddNew from "../components/offers/AddNew";
import { getOffers } from "../lib/api";

const Offers = () => {
  const { offers } = useLoaderData();
  return (
    <>
      {console.log(offers)}
      <AddNew />
      <Intro />
      <Filter />
      <Suspense fallback={<p>Loadind...</p>}>
        <Await resolve={offers}>
          {(loadEvent) => <Items offers={loadEvent} />}
        </Await>
      </Suspense>
    </>
  );
};

export default Offers;
export async function loader() {
  return defer({
    offers: await getOffers(),
  });
}
