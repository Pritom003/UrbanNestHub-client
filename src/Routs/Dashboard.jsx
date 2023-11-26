import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaComment, FaFileImport, FaHome, FaList, FaStar, FaUser } from 'react-icons/fa';
// import { FaCartPlus, FaFileCircleCheck } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
// import useAuth from "../Hooks/UseAuth";
import useAdmin from "../Hooks/UseAdmin";
import useAgent from "../Hooks/UseAgent";


const Dashboard = () => {
  // const {user}=useAuth()
    const [isAdmin]=useAdmin();
    const [isagent]=useAgent()
    // const isAdmin=true
  


    return (
        <div className="max-w-7xl mx-auto flex">
      
      <div className=" min-h-screen shadow-lg rounded-lg text-white bg-[#265073]">
        <ul className="menu p-4">
          
            <>
              {isAdmin ? <>
                <li>
                <NavLink to="/dashboard/adminhome">
                  {" "}
                  <FaHome className="text-xl"></FaHome> Admin Home
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser className="text-xl"></FaUser>Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageproperties">
                <FaList className="text-xl"></FaList>Manage Properties
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managereviews">
                <FaComment></FaComment>  Manage Reviews
                </NavLink>
              </li>
              
              </>
              
              
              : isagent? <><li><NavLink 
              to='/dashboard/addproperties'><FaFileImport
               className="text-xl"></FaFileImport> Add properties
               </NavLink></li>
              <li><NavLink to='/dashboard/createdcontest'><FaList className="text-xl"></FaList> My Created Contest</NavLink></li>
            
                  <li><NavLink to='/dashboard/winningcontest'>
                    <FaStar className="text-xl"></FaStar> My Winning Contest</NavLink></li>
                  <li><NavLink to='/dashboard/myprofile'><IoIosContact className="text-xl"></IoIosContact> My Profile</NavLink></li></> : ''} 
              
            </>
      
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome className="text-xl"></FaHome>Home
            </NavLink>
          </li>

          

          
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default Dashboard;