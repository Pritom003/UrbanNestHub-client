
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons8-real-estate-50 (1).png';
import useAuth from '../../../Hooks/UseAuth';
const Navbar = () => {
const {logout,user}=useAuth()
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    }



  const NavLinks = <>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/login">login</Link></li>
        <li><Link to="/regi">signup</Link></li> */}
     {
      user?    <li><Link to="/dashboard">Dashboard</Link></li>
                  
      
      
      :''
     }

{
      user?    <li><Link to="/allproperties">All Properties</Link></li>
                  
      
      
      :''
     }


        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <li> <Link onClick={handleLogOut} className="">LogOut</Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
       
       

    </>




  return (
    <>


    <div className='flex  fixed z-50 top-0 
     w-full first-letter first-lette  first-letter bg-black
      text-white justify-between lg:px-24 align-middle items-center '>
    <div >
   
    <a className="btn btn-ghost normal-case  lg:text-2xl text-2xl  md:text-4xl">
              <span className='text-[#265073] font-bold '>U</span>r b a n<span className='text-[#265073] font-bold '>N</span>e s t
              <span className='text-[#265073] font-bold '>H</span>u b s <img className='text-[#265073]' src={logo} alt="" />
            
            </a>
            <div className=' lg:hidden flex  justify-start align-middle items-center'>

          
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 text-[#fbfcfd] font-extrabold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu bg-blue-200 menu-compact dropdown-content mt-3 p-2 shadow text-gray-600 font-bold rounded-box w-52">
                    {NavLinks}
                </ul>  </div>
                {
    user ?
    
    <div className=" mt-6">
    <div className="tooltip" data-tip={user.displayName}>
    <div className="avatar p-4">
  <div className="w-6 mb-5  rounded-full ring ring-blue-950 ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} />
  </div>
</div>

    
  </div>
    </div> 



:''
   }
            </div>

    </div>
    <div className='lg:flex  hidden  justify-center align-middle items-center'>
    <ul className="menu menu-horizontal px-1 text-white font-bold uppercase">
                {NavLinks}
            </ul>

            <div>
            {
    user ?
    
    <div className=" mt-6">
    <div className="tooltip" data-tip={user.displayName}>
    <div className="avatar p-4">
  <div className="w-10 mb-6 rounded-full ring ring-blue-950 ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} />
  </div>
</div>

    
  </div>
    </div> 



:''
   }
            </div>
    </div>
    </div>
</>
  );
};

export default Navbar;