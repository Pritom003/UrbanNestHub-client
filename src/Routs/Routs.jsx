
import { createBrowserRouter } from 'react-router-dom';

import Main from '../LayOuts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/signup/SignUp';
import Dashboard from './Dashboard';
import Allusers from '../Pages/Dashboard/Allusers/Allusers';
import PrivateRoute from './secretrouts/PrivateRout';
import AdminRoute from './secretrouts/AdminRouts';
import AdminHome from '../Pages/Dashboard/Allusers/Adminrouts/AdminHome';
import Manageproperties from '../Pages/Dashboard/Allusers/Adminrouts/Manageproperties';
import Managereviews from '../Pages/Dashboard/Allusers/Adminrouts/Managereviews';

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
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
        // element:<Allusers></Allusers>}

        {
          path:'adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'manageproperties',
          element:<AdminRoute><Manageproperties></Manageproperties></AdminRoute>
        },
        {
          path:'managereviews',
          element:<AdminRoute><Managereviews></Managereviews></AdminRoute>
        },
    ]

  }


]);

export default router;