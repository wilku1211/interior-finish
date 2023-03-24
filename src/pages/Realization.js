import { Suspense } from "react";

import { useLoaderData, defer, Await } from "react-router-dom";
import { getAllRealizations } from "../lib/api";
import AddItem from "../components/realization/AddNew";
import Intro from "../components/realization/Intro";
import Items from "../components/realization/Items";

const Realization = () => {
  const { realizations } = useLoaderData();
  return (
    <>
      <Intro />
      <Suspense fallback={<p>Loadind...</p>}>
        <Await resolve={realizations}>
          {(loadRealizations) => <Items realizations={loadRealizations} />}
        </Await>
      </Suspense>
    </>
  );
};

export default Realization;
export async function loader() {
  return defer({
    realizations: await getAllRealizations(),
  });
}
