import React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";

import Main from '../LayOuts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/signup/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regi',
        element:<SignUp></SignUp>
      },
    ]
  },
]);

export default router;