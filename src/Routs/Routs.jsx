
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
import AddProperties from '../Pages/Dashboard/Agent/Addproperties/AddProperties';
import AgentHome from '../Pages/Dashboard/Agent/AgentHome';
import AgentProperties from '../Pages/Dashboard/Agent/Agentaddedproperities/AgentProperties';
import UserHome from '../Pages/Dashboard/User/UserHome';
import Wishlist from '../Pages/Dashboard/User/Wishlist/Wishlist';
import Boughtproperty from '../Pages/Dashboard/User/Boughtproperty/Boughtproperty';
import Myreviews from '../Pages/Dashboard/User/Myreviews/Myreviews';
import Mysoldproperties from '../Pages/Dashboard/Agent/Mysoldproperties/Mysoldproperties';
import RequestedProperties from '../Pages/Dashboard/Agent/Requested/RequestedProperties';
import Allproperites from '../Pages/Allproperties/Allproperites';
import PropertiesDetails from '../Pages/Details/PropertiesDetails';


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
      {
        path: '/allproperties',
        element: <Allproperites></Allproperites>,
      },

      {
        path: '/properties/:_id',
        element: <PropertiesDetails></PropertiesDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/properties/${params._id}`)    
        
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
        // agent routs
        {
          path:'addproperties',
          element:<AddProperties></AddProperties>
        },
        {
          path:'agentpropertyupdate',
          element:<AddProperties></AddProperties>
        },
        {
          path:'agenthome',
          element:<AgentHome></AgentHome>
        },
        {
          path:'addedproperties',
          element:<AgentProperties></AgentProperties>
        },
        {
          path:'soldproperties',
          element:<Mysoldproperties></Mysoldproperties>
        },
        {
          path:'requestedproperties',
          element:<RequestedProperties></RequestedProperties>
        },
        // user Routs
        {
          path:'userProfile',
          element:<UserHome></UserHome>
        },
        {
          path:'wishlist',
          element:<Wishlist></Wishlist>
        },
        {
          path:'boughtitem',
          element:<Boughtproperty></Boughtproperty>
        },
        {
          path:'myreviews',
          element:<Myreviews></Myreviews>
        }



    ]

  }


]);

export default router;