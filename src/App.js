import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages/Index";
import Layout from "./components/layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Offers from "./pages/Offers";
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
          },
          {
            path: ":postId",
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
  return <RouterProvider router={router} />;
}

export default App;
