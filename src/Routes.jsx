import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./Landingpage";
import Others from "./Others";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/others",
    element: <Others />,
  },
]);
