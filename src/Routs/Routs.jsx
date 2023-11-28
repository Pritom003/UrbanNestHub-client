
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
import AgentRoute from './secretrouts/AgentRouts';
import MaKeOffer from '../Pages/Dashboard/User/MakeOffer/MaKeOffer';
import Payment from '../Pages/Dashboard/User/Boughtproperty/Payment';
import Selectadv from '../Pages/Dashboard/Allusers/Adminrouts/Selectadv';
// import Advertisement from '../Pages/Home/Advertisement/Advertisement';


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
        element:<PrivateRoute> <Allproperites></Allproperites></PrivateRoute>,
      },

      {
        path: '/properties/:_id',
        element: <PrivateRoute><PropertiesDetails></PropertiesDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/properties/${params._id}`)    
        
      },
     
    ],
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      // admin routs
      {
        path:'allusers',
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
        // element:<Allusers></Allusers>}
        {
          path:'selectadv',
          element:<AdminRoute><Selectadv></Selectadv></AdminRoute>
        },
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
          element:<AgentRoute><AddProperties></AddProperties></AgentRoute>
        },
        {
          path:'agenthome',
          element:<AgentRoute><AgentHome></AgentHome></AgentRoute>
        },
        {
          path:'addedproperties',
          element:<AgentRoute><AgentProperties></AgentProperties></AgentRoute>
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
          element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
          // loader: () => fetch('http://localhost:5000/wished') 
         
        },
        {
          path:'boughtitem',
          element:<Boughtproperty></Boughtproperty>
        },
        {
          path:'myreviews',
          element:<Myreviews></Myreviews>
        },
      
        {
          path: 'wishlist/makeoffer/:id',
          element: <PrivateRoute><MaKeOffer /></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/wished/makeoffer/${params.id}`)
        },
        {
          path: 'boughtitem/payment/:id',
          element: <Payment></Payment>,
          loader: ({ params }) => fetch(`http://localhost:5000/offers/payment/${params.id}`)
        }


    ]

  }


]);

export default router;