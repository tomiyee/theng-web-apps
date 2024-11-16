import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage/ErrorPage";
import { MainLayout } from "./MainLayout";
import { lazy } from "react";

const LandingPage = lazy(() => import("../views/Landing/Landing"));
const FareSharePage = lazy(() => import("../views/FareShare/FareShare"));


export const router = createBrowserRouter([
  {
    path: "theng-web-apps",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage/>
      },
      {
        path: "fare-share",
        element: <FareSharePage/>
      }
    ]
  },
]);
