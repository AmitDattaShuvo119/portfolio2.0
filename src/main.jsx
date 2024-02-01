import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes.jsx";
import Landingpage from "./Landingpage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Landingpage />
    </RouterProvider>
  </React.StrictMode>
);
