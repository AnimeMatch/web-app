import React from "react";
import ReactDOM from "react-dom/client";
import "/src/assets/css/index.css";
import App from "./src/App.jsx";
import Home from "./src/pages/Home.jsx";
import AnimeInfoPage from "./src/pages/AnimeInfoPage";
import Profile from "./src/pages/Profile.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ScrollTop from "./src/components/ScrollTop.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:(<><App /> <ScrollTop/></> ),
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
        element: <Profile />
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
