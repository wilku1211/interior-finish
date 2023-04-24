import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamMemberProvider } from "./store/teamMembers-context";

import { loader as teamLoader } from "./components/layout/Layout";
import { loader as offersLoader } from "./pages/Offers";
import { loader as realizationsLoader } from "./pages/Realization";
import { loader as singleOffersLoader } from "./pages/OfferDetails";
const Layout = React.lazy(() => import("./components/layout/Layout"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Index = React.lazy(() => import("./pages/Index"));
const Offers = React.lazy(() => import("./pages/Offers"));
const OfferDetails = React.lazy(() => import("./pages/OfferDetails"));
const Team = React.lazy(() => import("./pages/Team"));
const Realization = React.lazy(() => import("./pages/Realization"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorPage />
      </Suspense>
    ),
    loader: teamLoader,
    id: "team",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "offers",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Offers />
              </Suspense>
            ),
            loader: offersLoader,
          },
          {
            path: ":offerId",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <OfferDetails />
              </Suspense>
            ),

            loader: singleOffersLoader,
          },
        ],
      },
      {
        path: "realization",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Realization />
          </Suspense>
        ),

        loader: realizationsLoader,
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Services />
          </Suspense>
        ),
      },

      {
        path: "contact",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <TeamMemberProvider>
      <RouterProvider router={router} />;
    </TeamMemberProvider>
  );
}

export default App;
