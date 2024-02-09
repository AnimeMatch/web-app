import React from "react";
import ReactDOM from "react-dom/client";
import "/src/assets/css/index.css";
import App from "./src/App.jsx";
import Home from "./src/pages/Home/Home.jsx";
import AnimeInfoPage from "./src/pages/Info/AnimeInfoPage.jsx";
import Profile from "./src/pages/Profile/Profile.jsx";
import ForumPage from "./src/pages/Forum/ForumPage.jsx";
import SearchManga from "./src/pages/search/SearchManga.jsx";
import SearchAnime from "./src/pages/Search/SearchAnime.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollTop from "./src/components/ScrollTop.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App /> <ScrollTop />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "anime/:id/*",
        element: <AnimeInfoPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "forum/",
        element: <ForumPage />,
      },
      {
        path: "search/manga/",
        element: <SearchManga />,
      },
      {
        path: "search/anime/",
        element: <SearchAnime />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
