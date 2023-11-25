
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons8-real-estate-50 (1).png';
const Navbar = () => {





  const NavLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/regi">signup</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
       
       

    </>


















  return (
    <>
    <div className="navbar  max-w-screen-xl bg-gray-400 text-white">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 text-[#265073]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu bg-blue-200 menu-compact dropdown-content mt-3 p-2 shadow text-gray-600 font-bold rounded-box w-52">
                    {NavLinks}
                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              <span className='text-[#265073] font-bold '>U</span>r b a n<span className='text-[#265073] font-bold '>N</span>e s t
              <span className='text-[#265073] font-bold '>H</span>u b s <img className='text-[#265073]' src={logo} alt="" />
            
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {NavLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Get started</a>
        </div>
    </div>
</>
  );
};

export default Navbar;