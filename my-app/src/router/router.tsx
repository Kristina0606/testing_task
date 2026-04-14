import { createBrowserRouter } from 'react-router-dom';
import { RootPaths } from './paths';
import App from '../App';

import { Layout } from '../layouts/Layout/Layout';
import { ErrorPage } from '../pages/ErrorPage';
import { FirstTaskPage } from '../pages/FirstTaskPage';
// import SecondTaskPage from '../pages/SecondTaskPage';
// import ThirdTaskPage from '../pages/ThirdTaskPage';
// import FourthTaskPage from '../pages/FourthTaskPage';

export const router = createBrowserRouter([
  {
    path: RootPaths.ROOT,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <FirstTaskPage />},
        //   { path: RootPaths.SECOND_TASK, element: <SecondTaskPage /> },
        //   { path: RootPaths.THIRD_TASK, element: <ThirdTaskPage /> },
        //   { path: RootPaths.FOURTH_TASK, element: <FourthTaskPage /> },
        ],
      },
    ],
  },
]);