import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/home";
import MangaDetailPage from "./Pages/mangaDetailPage";
import SearchPage from "./Pages/SearchPage";
import GenrePage from "./Pages/genrePage";
import ListPage from "./Pages/ListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/manga/search/:q/:page",
    element: <SearchPage />,
  },
  {
    path: "/manga-details/:id",
    element: <MangaDetailPage />,
  },
  {
    path: "/genre/:name/:id/:page",
    element: <GenrePage />,
  },
  {
    path: "/manga/list/:page",
    element: <ListPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
