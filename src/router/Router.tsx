import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "src/components/HomePage";
import FilmsPage from "src/components/FilmsPage";
import PeoplePage from "src/components/PeoplePage";
import SpeciesPage from "src/components/SpeciesPage";
import SingleFilm from "src/components/SingleFilm";
import SinglePerson from "src/components/SinglePerson";
import SingleSpecies from "src/components/SingleSpecies";
import Layout from "src/components/Layout";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/films",
          element: <FilmsPage />,
        },
        {
          path: "/films/:id",
          element: <SingleFilm />,
        },
        {
          path: "/people",
          element: <PeoplePage />,
        },
        {
          path: "/people/:id",
          element: <SinglePerson />,
        },
        {
          path: "/species",
          element: <SpeciesPage />,
        },
        {
          path: "/species/:id",
          element: <SingleSpecies />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
