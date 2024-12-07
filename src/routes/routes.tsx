import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../views/ErrorPage/ErrorPage';
import { MainLayout } from './MainLayout';
import { lazy } from 'react';
import { BASE_URL } from '../constants';

const LandingPage = lazy(() => import('../views/Landing/Landing'));
const FareSharePage = lazy(() => import('../views/FareShare/FareShare'));
const NumPadTrainerPage = lazy(() => import('../views/NumPadTrainer/NumPadTrainer'));
const RicePurityPage = lazy(() => import('../views/RicePurity/RicePurity'));
const FoxGamePage = lazy(() => import('../views/FoxGame/FoxGame'));
const MusicBoardPage = lazy(() => import('../views/MusicBoard/MusicBoard'));

export const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'fare-share',
        element: <FareSharePage />,
      },
      {
        path: 'num-pad-trainer',
        element: <NumPadTrainerPage />,
      },
      {
        path: 'rice-purity-test',
        element: <RicePurityPage />,
      },
      {
        path: 'fox-game',
        element: <FoxGamePage />,
      },
      {
        path: 'music-board',
        element: <MusicBoardPage />,
      },
    ],
  },
]);
