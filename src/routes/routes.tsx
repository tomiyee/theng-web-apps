import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage/ErrorPage";
import { MainLayout } from "./MainLayout";
import { lazy } from "react";
import { BASE_URL } from "../constants";

const LandingPage = lazy(() => import("../views/Landing/Landing"));
const FareSharePage = lazy(() => import("../views/FareShare/FareShare"));
const NumPadTrainerPage = lazy(() => import("../views/NumPadTrainer/NumPadTrainer"));


export const router = createBrowserRouter([
  {
    path: BASE_URL,
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
      },
      {
        path: "num-pad-trainer",
        element: <NumPadTrainerPage/>
      }
    ]
  },
]);
