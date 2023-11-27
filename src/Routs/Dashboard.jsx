import { NavLink, Outlet } from "react-router-dom";
import { FaBitbucket, FaBook, FaBuysellads, FaCartArrowDown, FaComment, FaFileImport, FaHome, FaList, FaMagic, FaMoneyBill, FaStar, FaStop, FaUser } from 'react-icons/fa';
import { IoIosContact } from "react-icons/io";
import useAdmin from "../Hooks/UseAdmin";
import useAgent from "../Hooks/UseAgent";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
            <div className="lg:min-h-screen w-full lg:w-1/5 shadow-lg rounded-lg text-white bg-[#265073]">
                <ul className="menu p-4">
                    <>
                        {isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminhome">
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
                                    <FaComment></FaComment> Manage Reviews
                                </NavLink>
                            </li>
                        </> : isAgent ? <>
                            <li><NavLink to='/dashboard/agenthome'><IoIosContact className="text-xl"></IoIosContact> My Profile</NavLink></li>
                            <li><NavLink to='/dashboard/addproperties'><FaFileImport className="text-xl"></FaFileImport> Add properties</NavLink></li>
                            <li><NavLink to='/dashboard/addedproperties'><FaList className="text-xl"></FaList> My added properties</NavLink></li>
                            <li><NavLink to='/dashboard/soldproperties'><FaStar className="text-xl"></FaStar> Mysold properties</NavLink></li>
                            <li><NavLink to='/dashboard/requestedproperties'><FaStop></FaStop> Requested properties.</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/userProfile'><IoIosContact className="text-xl"></IoIosContact> userprofile</NavLink></li>
                                <li><NavLink to='/dashboard/wishlist'> <FaMagic></FaMagic> Wishlist </NavLink></li>
                                <li><NavLink to='/dashboard/myreviews'><FaComment></FaComment> my reviews</NavLink></li>
                                <li><NavLink to='/dashboard/boughtitem'><FaMoneyBill></FaMoneyBill> bought properties</NavLink></li>
                          
                                
                            </>
                        }
                    </>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
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
