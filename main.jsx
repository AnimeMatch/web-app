import React from "react";
import ReactDOM from "react-dom/client";
import "/src/assets/css/index.css";
import App from "./src/App.jsx";
import Home from "./src/pages/Home.jsx";
import AnimeInfoPage from "./src/pages/AnimeInfoPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "anime/:id/*",
        element: <AnimeInfoPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
