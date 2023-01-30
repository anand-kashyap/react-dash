import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Registration />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Home />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
