import React from "react";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import { useLoaderData, defer, Await } from "react-router-dom";
import Filter from "../components/offers/Filter";
import Intro from "../components/offers/Intro";
import Items from "../components/offers/Items";
import AddNew from "../components/offers/AddNew";
import { getOffers } from "../lib/api";

const Offers = () => {
  const { offers } = useLoaderData();
  const [searchParams] = useSearchParams();

  return (
    <>
      <Intro />

      <Filter type={searchParams.get("filter")} />
      <Suspense fallback={<p>Loadind...</p>}>
        <Await resolve={offers}>
          {(loadEvent) => <Items offers={loadEvent} />}
        </Await>
      </Suspense>
    </>
  );
};

export default Offers;
export async function loader({ request }) {
  const url = new URL(request.url);
  const queryParams = new URLSearchParams(url.search);
  const queryPhrase = queryParams.get("filter");
  return defer({
    offers: await getOffers(queryPhrase),
  });
}
