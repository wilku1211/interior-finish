import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamMemberProvider } from "./store/teamMembers-context";

import Index from "./pages/Index";
import Layout, { loader as teamLoader } from "./components/layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Offers, { loader as offersLoader } from "./pages/Offers";
import Team from "./pages/Team";
import Realization from "./pages/Realization";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import OfferDetails from "./pages/OfferDetails";

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
        children: [
          {
            index: true,
            element: <Offers />,
            loader: offersLoader,
          },
          {
            path: ":offerId",
            element: <OfferDetails />,
          },
        ],
      },
      {
        path: "realization",
        element: <Realization />,
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
