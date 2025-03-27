import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AddBook from "./components/AddBook.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";

import Home from "./components/Home.jsx";
import BookDetails from "./components/BookDetails.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/browse/all",
        element: <BrowseBooks />,
      },
      {
        path: "/browse/:categories",
        element: <BrowseBooks />,
      },

      {
        path: "/bokdetails/:book",
        element: <BookDetails />,
      },
    ],
  },
]);
//
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
