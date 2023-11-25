
import { createBrowserRouter } from 'react-router-dom';

import Main from '../LayOuts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/signup/SignUp';
import Dashboard from './Dashboard';
import Allusers from '../Pages/Dashboard/Allusers/Allusers';
import PrivateRoute from './secretrouts/PrivateRout';
import AdminRoute from './secretrouts/AdminRouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/regi',
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'allusers',
        // element:<AdminRoute><Allusers></Allusers></AdminRoute>}
        element:<Allusers></Allusers>}
    ]

  }


]);

export default router;