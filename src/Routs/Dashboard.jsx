import { NavLink, Outlet } from "react-router-dom";
import { FaComment, FaFileImport, FaHome, FaList, FaMagic, FaMoneyBill, FaStar, FaStop, FaUser } from 'react-icons/fa';
import { IoIosContact } from "react-icons/io";
import useAdmin from "../Hooks/UseAdmin";
import useAgent from "../Hooks/UseAgent";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
    const [open, setOpen] = useState(false);
    const lgDevice = useMediaQuery('(min-width: 1024px)');

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="max-full mx-auto flex flex-col lg:flex-row bg-hero-pattern">
            <div className={`lg:min-h-screen md:w-full ${open ?
             'lg:max-w-[220px]' : 'lg:w-[110px]'} relative shadow-lg  text-white bg-[#443214]`}
            >
                {lgDevice && (open ?
                    <button className="absolute left-[190px]  top-[300px] rounded-full bg-[#b79b6b] text-3xl p-2 " onClick={handleOpen}><FaArrowRightArrowLeft /></button> :
                    <button className="absolute left-[80px] top-[300px] rounded-full bg-[#b79b6b] text-3xl p-2" onClick={handleOpen}><FaArrowRightArrowLeft /></button>
                )}
                <ul className="menu p-4 mt-24">

                    {isAdmin ? (
                        <>
                            <li>
                                {open ?
                                    <NavLink to="/dashboard/adminhome">
                                        <ImProfile className="text-xl" />
                                        Admin Home
                                    </NavLink>
                                    :
                                    <NavLink to="/dashboard/adminhome">
                                        <ImProfile className="text-xl" />
                                    </NavLink>
                                }
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUser className="text-xl" />
                                    {open && <span className="ml-2">Manage Users</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageproperties">
                                    <FaList className="text-xl" />
                                    {open && <span className="ml-2">Manage Properties</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/selectadv">
                                    <FaStar className="text-xl" />
                                    {open && <span className="ml-2">Advertisement</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/managereviews">
                                    <FaComment className="text-xl" />
                                    {open && <span className="ml-2">Manage Reviews</span>}
                                </NavLink>
                            </li>
                        </>
                    ) : isAgent ? (
                        <>
                            <li>
                                <NavLink to='/dashboard/agenthome'>
                                    <IoIosContact className="text-xl" />
                                    {open && <span className="ml-2">My Profile</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addproperties'>
                                    <FaFileImport className="text-xl" />
                                    {open && <span className="ml-2">Add properties</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addedproperties'>
                                    <FaList className="text-xl" />
                                    {open && <span className="ml-2">My added properties</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/soldproperties'>
                                    <FaStar className="text-xl" />
                                    {open && <span className="ml-2">My sold properties</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/requestedproperties'>
                                    <FaStop className="text-xl" />
                                    {open && <span className="ml-2">Requested properties.</span>}
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to='/dashboard/userProfile'>
                                    <IoIosContact className="text-xl" />
                                    {open && <span className="ml-2">User profile</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/wishlist'>
                                    <FaMagic className="text-xl" />
                                    {open && <span className="ml-2">Wishlist</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myreviews'>
                                    <FaComment className="text-xl" />
                                    {open && <span className="ml-2">My reviews</span>}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/boughtitem'>
                                    <FaMoneyBill className="text-xl" />
                                    {open && <span className="ml-2">Bought properties</span>}
                                </NavLink>
                            </li>
                        </>
                    )}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="text-xl" />
                            {open && <span className="ml-2">Home</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
