import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamMemberProvider } from "./store/teamMembers-context";

import Index from "./pages/Index";
import Layout, { loader as teamLoader } from "./components/layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Offers, { loader as offersLoader } from "./pages/Offers";
import Team from "./pages/Team";
import Realization, { loader as realizationsLoader } from "./pages/Realization";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import OfferDetails, {
  loader as singleOffersLoader,
} from "./pages/OfferDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: teamLoader,
    id: "team",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "offers",
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Offers />,
            loader: offersLoader,
          },
          {
            path: ":offerId",
            element: <OfferDetails />,
            loader: singleOffersLoader,
          },
        ],
      },
      {
        path: "realization",
        element: <Realization />,
        loader: realizationsLoader,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "services",
        element: <Services />,
      },

      {
        path: "contact",
        element: <Contact />,
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
