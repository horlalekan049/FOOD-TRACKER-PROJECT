import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import mainRoutes from './routes';
import Page404 from './pages/Page404';
import MainLayout from './layouts/MainLayout';
import Home2 from './pages/Home2';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', index: true, element: <Home /> },
    {
      children: mainRoutes,
      element: <MainLayout />,
      errorElement: <Page404 />,
    },
    { path: 'Home2', element: <Home2/> },
    { path: '/register', element: <Register/> },
    { path: '/login', element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;